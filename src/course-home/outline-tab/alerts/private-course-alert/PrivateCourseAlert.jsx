import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { useIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { Alert, Button, Hyperlink } from '@openedx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import enrollmentMessages from '../../../../alerts/enrollment-alert/messages';
import genericMessages from '../../../../generic/messages';
import messages from './messages';
import outlineMessages from '../../messages';
import useEnrollClickHandler from '../../../../alerts/enrollment-alert/clickHook';
import { useModel } from '../../../../generic/model-store';

const PrivateCourseAlert = ({ payload }) => {
  const intl = useIntl();
  const {
    anonymousUser,
    canEnroll,
    courseId,
  } = payload;

  const {
    org,
    title,
  } = useModel('courseHomeMeta', courseId);

  const { enrollClickHandler, loading } = useEnrollClickHandler(
    courseId,
    org,
    'Bạn đã đăng ký thành công!',
  );

  const enrollNowButton = (
    <Button
      disabled={loading}
      variant="link"
      className="p-0 border-0 align-top mr-1"
      style={{ textDecoration: 'underline' }}
      size="sm"
      onClick={enrollClickHandler}
    >
      Đăng ký ngay
    </Button>
  );

  const register = (
    <Hyperlink
      style={{ textDecoration: 'underline' }}
      destination={`${getConfig().LMS_BASE_URL}/register?next=${encodeURIComponent(global.location.href)}`}
    >
      đăng ký
    </Hyperlink>
  );

  const signIn = (
    <Hyperlink
      style={{ textDecoration: 'underline' }}
      destination={`${getLoginRedirectUrl(global.location.href)}`}
    >
      Đăng nhập
    </Hyperlink>
  );

  return (
    <Alert variant="light" data-testid="private-course-alert">
      {anonymousUser && (
        <>
          <p className="font-weight-bold">
            Bạn phải đăng ký để truy cập nội dung khóa học này.
          </p>
          {signIn} hoặc {register} và sau đó đăng ký khóa học này.
        </>
      )}
      {!anonymousUser && (
        <>
          <p className="font-weight-bold">Chào mừng đến với {title}</p>
          {canEnroll && (
            <div className="d-flex">
              {enrollNowButton}
              để truy cập nội dung khóa học.
              {loading && <FontAwesomeIcon icon={faSpinner} spin />}
            </div>
          )}
          {!canEnroll && (
            <>
              Bạn phải đăng ký để truy cập nội dung khóa học này.
            </>
          )}
        </>
      )}
    </Alert>
  );
};

PrivateCourseAlert.propTypes = {
  payload: PropTypes.shape({
    anonymousUser: PropTypes.bool,
    canEnroll: PropTypes.bool,
    courseId: PropTypes.string,
  }).isRequired,
};

export default PrivateCourseAlert;
