import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
// These flag svgs are derivatives of the Flag icon from paragon
import { ReactComponent as FlagIntenseIcon } from './flag_black.svg';
import { ReactComponent as FlagCasualIcon } from './flag_outline.svg';
import { ReactComponent as FlagRegularIcon } from './flag_gray.svg';
import FlagButton from './FlagButton';
import messages from '../messages';

const LearningGoalButton = ({
  level,
  isSelected,
  handleSelect,
}) => {
  const intl = useIntl();
  const buttonDetails = {
    casual: {
      daysPerWeek: 1,
      title: 'Thoải mái',
      text: '1 lần/tuần',
      icon: <FlagCasualIcon />,
    },
    regular: {
      daysPerWeek: 3,
      title: 'Thường xuyên',
      text: '3 lần/tuần',
      icon: <FlagRegularIcon />,
    },
    intense: {
      daysPerWeek: 5,
      title: 'Tích cực',
      text: '5 lần/tuần',
      icon: <FlagIntenseIcon />,
    },
  };

  const values = buttonDetails[level];

  return (
    <FlagButton
      buttonIcon={values.icon}
      title={values.title}
      text={values.text}
      handleSelect={() => handleSelect(values.daysPerWeek)}
      isSelected={isSelected}
    />
  );
};

LearningGoalButton.propTypes = {
  level: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default LearningGoalButton;
