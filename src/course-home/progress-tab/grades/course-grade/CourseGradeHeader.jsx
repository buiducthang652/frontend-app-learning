import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Locked } from '@openedx/paragon/icons';
import { Button, Icon } from '@openedx/paragon';
import { useContextId } from '../../../../data/hooks';

import { useModel } from '../../../../generic/model-store';
import messages from '../messages';

const CourseGradeHeader = () => {
  const intl = useIntl();
  const courseId = useContextId();
  const {
    org,
  } = useModel('courseHomeMeta', courseId);
  const {
    verifiedMode,
    gradesFeatureIsFullyLocked,
  } = useModel('progress', courseId);

  const eventProperties = {
    org_key: org,
    courserun_key: courseId,
  };

  const { administrator } = getAuthenticatedUser();
  const logUpgradeButtonClick = () => {
    sendTrackEvent('edx.ui.lms.course_progress.grades_upgrade.clicked', {
      org_key: org,
      courserun_key: courseId,
      is_staff: administrator,
    });
    sendTrackEvent('edx.bi.ecommerce.upsell_links_clicked', {
      ...eventProperties,
      linkCategory: '(none)',
      linkName: 'progress_locked',
      linkType: 'button',
      pageName: 'progress',
    });
  };
  let previewText;
  if (verifiedMode) {
    previewText = gradesFeatureIsFullyLocked
      ? 'Nâng cấp tài khoản để mở khóa điểm số và nhận chứng chỉ đã xác minh.'
      : 'Nâng cấp tài khoản để xem tất cả điểm số và nhận chứng chỉ đã xác minh.';
  } else {
    previewText = 'Hạn chót nâng cấp đã qua cho khóa học này.';
  }
  return (
    <div className="row w-100 m-0 p-4 rounded-top bg-primary-500 text-white">
      <div className={`col-12 ${verifiedMode ? 'col-md-9' : ''} p-0`}>
        <div className="row w-100 m-0 p-0">
          <div className="col-1 p-0">
            <Icon src={Locked} />
          </div>
          <div className="col-11 px-2 p-sm-0 h4 text-white">
            <span aria-hidden="true">
              🔒
            </span>
            {gradesFeatureIsFullyLocked
              ? 'Điểm số bị khóa'
              : 'Xem trước điểm số có giới hạn'}
          </div>
        </div>
        <div className="row w-100 m-0 p-0 justify-content-end">
          <div className="col-11 px-2 p-sm-0 small">
            {previewText}
          </div>
        </div>
      </div>
      {verifiedMode && (
        <div className="col-12 col-md-3 mt-3 mt-md-0 p-0 align-self-center text-right">
          <Button variant="brand" size="sm" href={verifiedMode.upgradeUrl} onClick={logUpgradeButtonClick}>
            Nâng cấp ngay
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseGradeHeader;
