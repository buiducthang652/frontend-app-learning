import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import camelCase from 'lodash.camelcase';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';

import messages from '../messages';
import { getProctoringInfoData } from '../../data/api';
import { fetchProctoringInfoResolved } from '../../data/slice';
import { useModel } from '../../../generic/model-store';

const ProctoringInfoPanel = () => {
  const intl = useIntl();
  const {
    courseId,
  } = useSelector(state => state.courseHome);
  const {
    username,
  } = useModel('courseHomeMeta', courseId);
  const dispatch = useDispatch();

  const [link, setLink] = useState('');
  const [onboardingPastDue, setOnboardingPastDue] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [status, setStatus] = useState('');
  const [readableStatus, setReadableStatus] = useState('');
  const [releaseDate, setReleaseDate] = useState(null);

  const readableStatuses = {
    notStarted: 'notStarted',
    started: 'started',
    submitted: 'submitted',
    verified: 'verified',
    rejected: 'rejected',
    error: 'error',
    otherCourseApproved: 'otherCourseApproved',
    expiringSoon: 'expiringSoon',
    expired: 'expired',
  };

  function getReadableStatusClass(examStatus) {
    let readableClass = '';
    if (['created', 'download_software_clicked', 'ready_to_start'].includes(examStatus) || !examStatus) {
      readableClass = readableStatuses.notStarted;
    } else if (['started', 'ready_to_submit'].includes(examStatus)) {
      readableClass = readableStatuses.started;
    } else if (['second_review_required', 'submitted'].includes(examStatus)) {
      readableClass = readableStatuses.submitted;
    } else {
      const examStatusCamelCase = camelCase(examStatus);
      if (examStatusCamelCase in readableStatuses) {
        readableClass = readableStatuses[examStatusCamelCase];
      }
    }
    return readableClass;
  }

  function isCurrentlySubmitted(examStatus) {
    const SUBMITTED_STATES = ['submitted', 'second_review_required'];
    return SUBMITTED_STATES.includes(examStatus);
  }

  function isSubmissionRequired(examStatus) {
    const OK_STATES = [readableStatuses.submitted, readableStatuses.verified];
    return !OK_STATES.includes(examStatus);
  }

  function isNotYetReleased(examReleaseDate) {
    if (!examReleaseDate) {
      return false;
    }
    const now = new Date();
    return now < examReleaseDate;
  }

  function getBorderClass() {
    let borderClass = '';
    if ([readableStatuses.submitted, readableStatuses.expiringSoon].includes(readableStatus)) {
      borderClass = 'proctoring-onboarding-submitted';
    } else if ([readableStatuses.verified, readableStatuses.otherCourseApproved].includes(readableStatus)) {
      borderClass = 'proctoring-onboarding-success';
    }
    return borderClass;
  }

  function isExpired(dateString) {
    // Returns true if the expiration date has passed
    const today = new Date();
    const expirationDateObject = new Date(dateString);
    return today >= expirationDateObject.getTime();
  }

  function isExpiringSoon(dateString) {
    // Returns true if the expiration date is within 28 days
    const twentyeightDays = 28 * 24 * 60 * 60 * 1000;
    const today = new Date();
    const expirationDateObject = new Date(dateString);
    return today > expirationDateObject.getTime() - twentyeightDays;
  }

  useEffect(() => {
    getProctoringInfoData(courseId, username)
      .then(
        response => {
          if (response) {
            if (Object.keys(response).length > 0) {
              setShowInfoPanel(true);
            }

            setStatus(response.onboarding_status);
            setLink(response.onboarding_link);
            const expirationDate = response.expiration_date;
            if (expirationDate && isExpired(expirationDate)) {
              setReadableStatus(getReadableStatusClass('expired'));
            } else if (expirationDate && isExpiringSoon(expirationDate)) {
              setReadableStatus(getReadableStatusClass('expiringSoon'));
            } else {
              setReadableStatus(getReadableStatusClass(response.onboarding_status));
            }
            setReleaseDate(new Date(response.onboarding_release_date));
            setOnboardingPastDue(response.onboarding_past_due);
          }
        },
      )
      .catch(() => {
        /* Do nothing. API throws 404 when class does not have proctoring */
      })
      .finally(() => {
        dispatch(fetchProctoringInfoResolved());
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let onboardingExamButton = null;

  if (isNotYetReleased(releaseDate)) {
    onboardingExamButton = (
      <Button variant="secondary" block disabled aria-disabled="true">
        Không có sẵn cho đến {intl.formatDate(releaseDate, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </Button>
    );
  } else if (onboardingPastDue) {
    onboardingExamButton = (
      <Button variant="secondary" block disabled aria-disabled="true">
        Hạn chót đã qua
      </Button>
    );
  } else if (!isNotYetReleased(releaseDate)) {
    if (readableStatus === readableStatuses.otherCourseApproved) {
      onboardingExamButton = (
        <Button variant="primary" block href={link}>
          Thi thử
        </Button>
      );
    } else if (readableStatus !== readableStatuses.otherCourseApproved) {
      onboardingExamButton = (
        <Button variant="primary" block href={link}>
          Bắt đầu làm quen hệ thống
        </Button>
      );
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { showInfoPanel && (
        <section className={`mb-4 p-3 outline-sidebar-proctoring-panel ${getBorderClass()}`}>
          <h2 className="h4" id="outline-sidebar-upgrade-header">Thông tin giám sát thi</h2>
          <div>
            {readableStatus && (
              <>
                <p className="h6">
                  Trạng thái hiện tại: {readableStatus === 'notStarted' ? 'Chưa bắt đầu' : 
                    readableStatus === 'started' ? 'Đã bắt đầu' :
                    readableStatus === 'submitted' ? 'Đã nộp' :
                    readableStatus === 'verified' ? 'Đã xác minh' :
                    readableStatus === 'rejected' ? 'Bị từ chối' :
                    readableStatus === 'error' ? 'Lỗi' :
                    readableStatus === 'otherCourseApproved' ? 'Đã được duyệt từ khóa học khác' :
                    readableStatus === 'expiringSoon' ? 'Sắp hết hạn' :
                    readableStatus === 'expired' ? 'Đã hết hạn' : 'Không xác định'}
                </p>
                <p>
                  {readableStatus === 'notStarted' ? 'Bạn chưa hoàn thành quy trình làm quen với hệ thống giám sát thi.' :
                    readableStatus === 'started' ? 'Bạn đã bắt đầu quy trình làm quen nhưng chưa hoàn thành.' :
                    readableStatus === 'submitted' ? 'Bạn đã hoàn thành quy trình làm quen và đang chờ duyệt.' :
                    readableStatus === 'verified' ? 'Bạn đã được xác minh để tham gia các bài thi giám sát.' :
                    readableStatus === 'rejected' ? 'Quy trình làm quen của bạn đã bị từ chối.' :
                    readableStatus === 'error' ? 'Có lỗi xảy ra trong quy trình làm quen.' :
                    readableStatus === 'otherCourseApproved' ? 'Bạn đã được duyệt từ khóa học khác.' :
                    readableStatus === 'expiringSoon' ? 'Xác minh của bạn sắp hết hạn.' :
                    readableStatus === 'expired' ? 'Xác minh của bạn đã hết hạn.' : ''}
                </p>
                <p>
                  {readableStatus === readableStatuses.otherCourseApproved && 'Bạn được phép tham gia bài thi thử để làm quen với quy trình.'}
                </p>
              </>
            )}
            {![readableStatuses.verified, readableStatuses.otherCourseApproved].includes(readableStatus) && (
              <>
                <p>
                  {!isCurrentlySubmitted(status) && (
                    'Để tham gia các bài thi giám sát trong khóa học này, bạn phải hoàn thành quy trình làm quen với hệ thống giám sát.'
                  )}
                  {isCurrentlySubmitted(status) && (
                    'Bạn đã hoàn thành quy trình làm quen. Kết quả sẽ được thông báo trong vòng 2-3 ngày làm việc.'
                  )}
                </p>
                <p>Quy trình làm quen mất khoảng 20 phút để hoàn thành.</p>
              </>
            )}
            {isSubmissionRequired(readableStatus) && (
              onboardingExamButton
            )}
            <Button variant="outline-primary" block href="https://support.edx.org/hc/en-us/sections/115004169247-Taking-Timed-and-Proctored-Exams">
              Xem lại yêu cầu kỹ thuật
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default ProctoringInfoPanel;
