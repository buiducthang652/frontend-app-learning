import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import { Hyperlink } from '@openedx/paragon';

import messages from '../courseware/course/course-exit/messages';

const DashboardLink = () => {
  const intl = useIntl();
  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={`${getConfig().LMS_BASE_URL}/dashboard`}
    >
      Bảng điều khiển
    </Hyperlink>
  );
};

const IdVerificationSupportLink = () => {
  const intl = useIntl();
  if (!getConfig().SUPPORT_URL_ID_VERIFICATION) {
    return null;
  }
  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={getConfig().SUPPORT_URL_ID_VERIFICATION}
    >
      Tìm hiểu thêm về xác minh danh tính
    </Hyperlink>
  );
};

const ProfileLink = () => {
  const intl = useIntl();
  const { username } = getAuthenticatedUser();

  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={`${getConfig().ACCOUNT_PROFILE_URL}/u/${username}`}
    >
      Hồ sơ
    </Hyperlink>
  );
};

export { DashboardLink, IdVerificationSupportLink, ProfileLink };
