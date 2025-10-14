import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';
import {
  ActionRow, Button, Icon, StandardModal,
} from '@openedx/paragon';
import { Lightbulb } from '@openedx/paragon/icons';

import Target from './assets/target.svg';
import messages from './messages';
import { recordWeeklyGoalCelebration } from './utils';
import { useModel } from '../../../generic/model-store';

const WeeklyGoalCelebrationModal = ({
  courseId, daysPerWeek, isOpen, onClose, ...rest
}) => {
  const intl = useIntl();
  const { org } = useModel('courseHomeMeta', courseId);

  useEffect(() => {
    if (isOpen) {
      recordWeeklyGoalCelebration(org, courseId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <StandardModal
      footerNode={(
        <ActionRow isStacked className="pb-2">
          <Button onClick={onClose}>Tiếp tục phấn đấu!</Button>
        </ActionRow>
      )}
      hasCloseButton={false}
      isOpen={isOpen}
      onClose={onClose}
      title={(
        <p className="h2 text-center mr-n5 pt-4">Hoàn thành mục tiêu!</p>
      )}
      {...rest}
    >
      <>
        <div className="text-center px-3">
          Chúc mừng, bạn đã đạt được mục tiêu học tập <strong>{daysPerWeek} {daysPerWeek === 1 ? 'lần' : 'lần'}</strong> một tuần.
        </div>
        <div className="d-flex justify-content-center py-4.5">
          <img src={Target} alt="" />
        </div>
        <div className="py-3 pl-3 bg-light-300 small d-inline-flex">
          <Icon
            src={Lightbulb}
            className="mr-2"
            style={{ height: '21px', width: '22px' }}
          />
          <div>
            Đặt mục tiêu có thể giúp bạn <strong>đạt hiệu suất cao hơn</strong> trong khóa học của mình.
          </div>
        </div>
      </>
    </StandardModal>
  );
};

WeeklyGoalCelebrationModal.propTypes = {
  courseId: PropTypes.string.isRequired,
  daysPerWeek: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WeeklyGoalCelebrationModal;
