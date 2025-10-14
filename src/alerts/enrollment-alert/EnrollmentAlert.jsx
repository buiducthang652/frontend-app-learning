import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import { Alert, Button } from '@openedx/paragon';
import { Info, WarningFilled } from '@openedx/paragon/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useModel } from '../../generic/model-store';

import messages from './messages';
import useEnrollClickHandler from './clickHook';

const EnrollmentAlert = ({ payload }) => {
  const intl = useIntl();
  const {
    canEnroll,
    courseId,
    extraText,
    isStaff,
  } = payload;

  const {
    org,
  } = useModel('courseHomeMeta', courseId);

  const { enrollClickHandler, loading } = useEnrollClickHandler(
    courseId,
    org,
    'Bạn đã đăng ký thành công khóa học này!',
  );

  let text = 'Bạn phải đăng ký khóa học để xem nội dung khóa học.';
  let type = 'warning';
  let icon = WarningFilled;
  if (isStaff) {
    text = 'Bạn đang xem khóa học này với tư cách là nhân viên và chưa đăng ký.';
    type = 'info';
    icon = Info;
  } else if (extraText) {
    text = `${text} ${extraText}`;
  }

  const button = canEnroll && (
    <Button disabled={loading} variant="link" className="p-0 border-0 align-top mx-1" size="sm" style={{ textDecoration: 'underline' }} onClick={enrollClickHandler}>
      Đăng ký ngay.
    </Button>
  );

  return (
    <Alert variant={type} icon={icon}>
      <div className="d-flex">
        {text}
        {button}
        {loading && <FontAwesomeIcon icon={faSpinner} spin />}
      </div>
    </Alert>
  );
};

EnrollmentAlert.propTypes = {
  payload: PropTypes.shape({
    canEnroll: PropTypes.bool,
    courseId: PropTypes.string,
    extraText: PropTypes.string,
    isStaff: PropTypes.bool,
  }).isRequired,
};

export default EnrollmentAlert;
