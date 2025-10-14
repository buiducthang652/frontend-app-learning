import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';

import messages from './messages';

const ContentLock = ({
  courseId, prereqSectionName, prereqId, sequenceTitle,
}) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/course/${courseId}/${prereqId}`);
  }, [courseId, prereqId]);

  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faLock} />
        {' '}
        {sequenceTitle}
      </h3>
      <h4>Nội dung bị khóa</h4>
      <p>
        Bạn phải hoàn thành phần {prereqSectionName} trước khi có thể truy cập nội dung này.
      </p>
      <p>
        <Button variant="primary" onClick={handleClick}>Đi đến phần yêu cầu</Button>
      </p>
    </>
  );
};
ContentLock.propTypes = {
  courseId: PropTypes.string.isRequired,
  prereqSectionName: PropTypes.string.isRequired,
  prereqId: PropTypes.string.isRequired,
  sequenceTitle: PropTypes.string.isRequired,
};
export default ContentLock;
