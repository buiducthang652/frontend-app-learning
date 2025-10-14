import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

// This component shows an effort estimate provided by the backend block data. Either time, activities, or both.

const EffortEstimate = (props) => {
  const intl = useIntl();
  const {
    block: {
      effortActivities,
      effortTime,
    },
    className,
  } = props;

  const minuteCount = Math.ceil(effortTime / 60); // effortTime is in seconds
  const minutesAbbreviated = `${minuteCount} phút`;
  const minutesFull = `${minuteCount} phút`;
  const minutes = (
    <>
      <span aria-hidden="true">{minutesAbbreviated}</span>
      <span className="sr-only">{minutesFull}</span>
    </>
  );
  const activities = `${effortActivities} hoạt động`;
  let content = null;

  if (effortTime && effortActivities) {
    content = (
      <>{minutes} + {activities}</>
    );
  } else if (effortTime) {
    content = minutes;
  } else if (effortActivities) {
    content = activities;
  } else {
    return null;
  }

  return (
    <span
      className={classNames('text-gray-500 text-monospace', className)}
      style={{ fontSize: '0.8em' }}
    >
      {content}
    </span>
  );
};

EffortEstimate.defaultProps = {
  className: null,
};

EffortEstimate.propTypes = {
  block: PropTypes.shape({
    effortActivities: PropTypes.number,
    effortTime: PropTypes.number,
  }).isRequired,
  className: PropTypes.string,
};

export default EffortEstimate;
