import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { FormattedDate, FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';

import { Button, Card } from '@openedx/paragon';
import { getConfig } from '@edx/frontend-platform';
import { useContextId } from '../../../data/hooks';
import { useModel } from '../../../generic/model-store';
import { COURSE_EXIT_MODES, getCourseExitMode } from '../../../courseware/course/course-exit/utils';
import { DashboardLink, IdVerificationSupportLink, ProfileLink } from '../../../shared/links';
import { requestCert } from '../../data/thunks';
import messages from './messages';
import ProgressCertificateStatusSlot from '../../../plugin-slots/ProgressCertificateStatusSlot';

const CertificateStatus = () => {
  const intl = useIntl();
  const courseId = useContextId();

  const {
    entranceExamData,
  } = useModel('coursewareMeta', courseId);

  const {
    isEnrolled,
    org,
    canViewCertificate,
    userTimezone,
  } = useModel('courseHomeMeta', courseId);

  const {
    certificateData,
    end,
    enrollmentMode,
    gradingPolicy: {
      gradeRange,
    },
    hasScheduledContent,
    userHasPassingGrade,
    verificationData,
    verifiedMode,
  } = useModel('progress', courseId);
  const {
    certificateAvailableDate,
  } = certificateData || {};

  const entranceExamPassed = entranceExamData?.entranceExamPassed ?? null;

  const mode = getCourseExitMode(
    certificateData,
    hasScheduledContent,
    isEnrolled,
    userHasPassingGrade,
    null, // CourseExitPageIsActive
    canViewCertificate,
    entranceExamPassed,
  );

  const eventProperties = {
    org_key: org,
    courserun_key: courseId,
  };

  const dispatch = useDispatch();
  const { administrator } = getAuthenticatedUser();

  let certStatus;
  let certWebViewUrl;
  const timezoneFormatArgs = userTimezone ? { timeZone: userTimezone } : {};

  if (certificateData) {
    certStatus = certificateData.certStatus;
    certWebViewUrl = certificateData.certWebViewUrl;
  }

  let certCase;
  let certEventName = certStatus;
  let body;
  let buttonAction;
  let buttonLocation;
  let buttonText;
  let endDate;
  let certAvailabilityDate;

  let gradeEventName = 'not_passing';
  if (userHasPassingGrade) {
    gradeEventName = Object.entries(gradeRange).length > 1 ? 'passing_grades' : 'passing';
  }

  const dashboardLink = <DashboardLink />;
  const idVerificationSupportLink = <IdVerificationSupportLink />;
  const profileLink = <ProfileLink />;

  // Some learners have a valid ("downloadable") certificate without being in a passing
  // state (e.g. learners who have been added to a course's allowlist), so we need to
  // skip grade validation for these learners
  const certIsDownloadable = certStatus === 'downloadable';
  if (mode === COURSE_EXIT_MODES.disabled) {
    certEventName = 'certificate_status_disabled';
  } else if (mode === COURSE_EXIT_MODES.nonPassing && !certIsDownloadable) {
    certCase = 'notPassing';
    certEventName = 'not_passing';
    body = 'Để đủ điều kiện nhận chứng chỉ, bạn cần đạt điểm đỗ trong khóa học này.';
  } else if (mode === COURSE_EXIT_MODES.inProgress && !certIsDownloadable) {
    certCase = 'inProgress';
    certEventName = 'has_scheduled_content';
    body = 'Chúng tôi không thể tạo chứng chỉ của bạn ngay lúc này. Nội dung khóa học mà chúng tôi yêu cầu để có chứng chỉ sẽ được phát hành theo lịch trình.';
  } else if (mode === COURSE_EXIT_MODES.celebration || certIsDownloadable) {
    switch (certStatus) {
      case 'requesting':
        certCase = 'requestable';
        buttonAction = () => { dispatch(requestCert(courseId)); };
        body = 'Chúc mừng, bạn đã hoàn thành khóa học này! Để nhận chứng chỉ, hãy yêu cầu tạo chứng chỉ bên dưới.';
        buttonText = 'Yêu cầu chứng chỉ';
        break;

      case 'unverified':
        certCase = 'unverified';
        if (verificationData.status === 'pending') {
          body = (<p>Bạn đã gửi thông tin xác minh danh tính để được tạo chứng chỉ. Xem xét thường mất 2-3 ngày làm việc.</p>);
        } else {
          body = (
            <>
              Để tạo chứng chỉ, bạn phải hoàn thành xác minh danh tính. {idVerificationSupportLink}.
            </>
          );
          buttonLocation = verificationData.link;
          buttonText = 'Xác minh danh tính của tôi';
        }
        break;

      case 'downloadable':
        // Certificate available, download/viewable
        certCase = 'downloadable';
        body = (
          <>
            Thể hiện thành tích của bạn trên LinkedIn hoặc CV ngay hôm nay.
            Bạn có thể tải xuống chứng chỉ ngay bây giờ và truy cập bất cứ lúc nào từ {dashboardLink} và {profileLink} của bạn.
          </>
        );
        if (certWebViewUrl) {
          certEventName = 'earned_viewable';
          buttonLocation = `${getConfig().LMS_BASE_URL}${certWebViewUrl}`;
          buttonText = 'Xem chứng chỉ';
        }
        break;

      case 'earned_but_not_available':
        certCase = 'notAvailable';
        endDate = <FormattedDate value={end} day="numeric" month="long" year="numeric" />;
        certAvailabilityDate = <FormattedDate value={certificateAvailableDate} day="numeric" month="long" year="numeric" />;
        body = (
          <>
            Khóa học này kết thúc vào ngày {endDate}. Điểm số cuối cùng và chứng chỉ đạt được
            được lên lịch có sẵn sau ngày {certAvailabilityDate}.
          </>
        );
        break;

      case 'audit_passing':
      case 'honor_passing':
        if (verifiedMode) {
          certCase = 'upgrade';
          body = 'Để nhận chứng chỉ đã xác minh, hãy nâng cấp tài khoản của bạn. Chứng chỉ đã xác minh chứng thực danh tính của bạn, có thể được chia sẻ với các nhà tuyển dụng, và có thể được áp dụng cho tín chỉ học tập.';
          buttonLocation = verifiedMode.upgradeUrl;
          buttonText = 'Nâng cấp để nhận chứng chỉ đã xác minh';
        } else {
          certCase = null; // Do not render the certificate component if the upgrade deadline has passed
          certEventName = 'audit_passing_missed_upgrade_deadline';
        }
        break;

      default:
        // if user completes a course before certificates are available, treat it as notAvailable
        // regardless of passing or nonpassing status
        if (!canViewCertificate) {
          certCase = 'notAvailable';
          endDate = intl.formatDate(end, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            ...timezoneFormatArgs,
          });
          body = `Khóa học này kết thúc vào ngày ${endDate}. Điểm số cuối cùng và chứng chỉ đạt được sẽ được công bố sau khi khóa học kết thúc.`;
        } else {
          certCase = null;
          certEventName = 'no_certificate_status';
        }
        break;
    }
  }

  // Log visit to progress tab
  useEffect(() => {
    sendTrackEvent('edx.ui.lms.course_progress.visited', {
      org_key: org,
      courserun_key: courseId,
      is_staff: administrator,
      track_variant: enrollmentMode,
      grade_variant: gradeEventName,
      certificate_status_variant: certEventName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!certCase) {
    return null;
  }

  const header = certCase === 'notPassing' ? 'Chứng chỉ không có sẵn' :
    certCase === 'inProgress' ? 'Chứng chỉ không có sẵn' :
    certCase === 'requestable' ? 'Chúc mừng!' :
    certCase === 'unverified' ? 'Xác minh danh tính của bạn' :
    certCase === 'downloadable' ? 'Chúc mừng!' :
    certCase === 'notAvailable' ? 'Chứng chỉ không có sẵn' :
    certCase === 'upgrade' ? 'Nâng cấp để nhận chứng chỉ đã xác minh' : 'Trạng thái chứng chỉ';

  const logCertificateStatusButtonClicked = () => {
    sendTrackEvent('edx.ui.lms.course_progress.certificate_status.clicked', {
      org_key: org,
      courserun_key: courseId,
      is_staff: administrator,
      certificate_status_variant: certEventName,
    });
    if (certCase === 'upgrade') {
      sendTrackEvent('edx.bi.ecommerce.upsell_links_clicked', {
        ...eventProperties,
        linkCategory: '(none)',
        linkName: 'progress_certificate',
        linkType: 'button',
        pageName: 'progress',
      });
    }
  };

  return (
    <section data-testid="certificate-status-component" className="text-dark-700 mb-4">
      <Card className="bg-light-200 raised-card">
        <ProgressCertificateStatusSlot courseId={courseId}>
          <div id={`${certCase}_certificate_status`}>
            <Card.Header title={header} />
            <Card.Section className="small text-gray-700">
              {body}
            </Card.Section>
            <Card.Footer>
              {buttonText && (buttonLocation || buttonAction) && (
                <Button
                  variant="outline-brand"
                  onClick={() => {
                    logCertificateStatusButtonClicked(certStatus);
                    if (buttonAction) { buttonAction(); }
                  }}
                  href={buttonLocation}
                  block
                >
                  {buttonText}
                </Button>
              )}
            </Card.Footer>
          </div>
        </ProgressCertificateStatusSlot>
      </Card>
    </section>
  );
};

export default CertificateStatus;
