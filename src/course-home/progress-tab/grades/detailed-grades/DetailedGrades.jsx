import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Locked } from '@openedx/paragon/icons';
import { Icon, Hyperlink } from '@openedx/paragon';
import { useContextId } from '../../../../data/hooks';
import { useModel } from '../../../../generic/model-store';
import { showUngradedAssignments } from '../../utils';

import DetailedGradesTable from './DetailedGradesTable';

import messages from '../messages';

const DetailedGrades = () => {
  const intl = useIntl();
  const { administrator } = getAuthenticatedUser();
  const courseId = useContextId();
  const {
    org,
    tabs,
  } = useModel('courseHomeMeta', courseId);
  const {
    gradesFeatureIsFullyLocked,
    gradesFeatureIsPartiallyLocked,
    sectionScores,
  } = useModel('progress', courseId);

  const hasSectionScores = sectionScores.length > 0;
  const emptyTableMsg = showUngradedAssignments()
    ? 'Bạn chưa có điểm nào. Bài tập, bài quiz và bài kiểm tra sẽ được hiển thị ở đây sau khi bạn hoàn thành và gửi.' : 'Bạn chưa có điểm nào cho các bài tập được chấm điểm. Bài tập, bài quiz và bài kiểm tra được chấm điểm sẽ được hiển thị ở đây sau khi bạn hoàn thành và gửi.';

  const logOutlineLinkClick = () => {
    sendTrackEvent('edx.ui.lms.course_progress.detailed_grades.course_outline_link.clicked', {
      org_key: org,
      courserun_key: courseId,
      is_staff: administrator,
    });
  };

  const overviewTab = tabs.find(tab => tab.slug === 'outline');
  const overviewTabUrl = overviewTab && overviewTab.url;

  const outlineLink = overviewTabUrl && (
    <Hyperlink
      variant="muted"
      isInline
      destination={overviewTabUrl}
      onClick={logOutlineLinkClick}
      tabIndex={gradesFeatureIsFullyLocked ? '-1' : '0'}
    >
      đề cương khóa học
    </Hyperlink>
  );

  return (
    <section className="text-dark-700">
      <h3 className="h4">Điểm chi tiết</h3>
      <ul className="micro mb-3 pl-3 text-gray-700">
        <li>
          <b>Điểm thực hành: </b>
          Không tính vào điểm cuối cùng (chỉ để luyện tập)
        </li>
        <li>
          <b>Điểm đã chấm: </b>
          Tính vào điểm cuối cùng
        </li>
      </ul>
      {gradesFeatureIsPartiallyLocked && (
        <div className="mb-3 small ml-0 d-inline">
          <Icon className="mr-1 mt-1 d-inline-flex" style={{ height: '1rem', width: '1rem' }} src={Locked} data-testid="locked-icon" />
          Chỉ một số điểm mới hiển thị. Nâng cấp để xem tất cả.
        </div>
      )}
      {hasSectionScores && (
        <DetailedGradesTable />
      )}
      {!hasSectionScores && (
        <p className="small">{emptyTableMsg}</p>
      )}
      {overviewTabUrl && !showUngradedAssignments() && (
        <p className="x-small m-0">
          Bài tập và bài quiz không được chấm điểm có thể được tìm thấy trong {outlineLink}.
        </p>
      )}
    </section>
  );
};

export default DetailedGrades;
