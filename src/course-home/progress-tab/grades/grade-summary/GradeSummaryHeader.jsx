import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Hyperlink,
  Icon,
  OverlayTrigger,
  Stack,
  Tooltip,
} from '@openedx/paragon';
import { InfoOutline, Locked } from '@openedx/paragon/icons';
import { useContextId } from '../../../../data/hooks';

import messages from '../messages';
import { useModel } from '../../../../generic/model-store';

const GradeSummaryHeader = ({ allOfSomeAssignmentTypeIsLocked }) => {
  const intl = useIntl();
  const courseId = useContextId();
  const {
    verifiedMode,
    gradesFeatureIsFullyLocked,
  } = useModel('progress', courseId);

  return (
    <Stack gap={2} className="mb-3">
      <Stack direction="horizontal" gap={2}>
        <h3 className="h4 m-0">Tóm tắt điểm</h3>
        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={(
            <Tooltip>
              Tóm tắt của các loại bài tập trong khóa học này và cách chúng ảnh hưởng đến điểm cuối cùng của bạn.
            </Tooltip>
          )}
        >
          <Icon
            alt="Xem thông tin tóm tắt điểm"
            src={InfoOutline}
            size="sm"
          />
        </OverlayTrigger>
      </Stack>
      {!gradesFeatureIsFullyLocked && allOfSomeAssignmentTypeIsLocked && (
        <Stack direction="horizontal" className="small" gap={2}>
          <Icon size="sm" src={Locked} data-testid="locked-icon" />
          <span>
            Chỉ một số điểm mới hiển thị. {verifiedMode && (
              <Hyperlink destination={verifiedMode.upgradeUrl}>
                Nâng cấp ngay.
              </Hyperlink>
            )} để xem tất cả.
          </span>
        </Stack>
      )}
    </Stack>
  );
};

GradeSummaryHeader.propTypes = {
  allOfSomeAssignmentTypeIsLocked: PropTypes.bool.isRequired,
};

export default GradeSummaryHeader;
