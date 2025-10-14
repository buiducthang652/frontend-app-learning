import PropTypes from 'prop-types';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { FormattedMessage, FormattedDate, useIntl } from '@edx/frontend-platform/i18n';
import { Alert, Hyperlink } from '@openedx/paragon';
import { Info } from '@openedx/paragon/icons';

import messages from './messages';

const AccessExpirationAlert = ({ payload }) => {
  const intl = useIntl();
  const {
    accessExpiration,
    courseId,
    org,
    userTimezone,
    analyticsPageName,
  } = payload;
  const timezoneFormatArgs = userTimezone ? { timeZone: userTimezone } : {};

  if (!accessExpiration) {
    return null;
  }

  const {
    expirationDate,
    upgradeDeadline,
    upgradeUrl,
  } = accessExpiration;

  const logClick = () => {
    sendTrackEvent('edx.bi.ecommerce.upsell_links_clicked', {
      org_key: org,
      courserun_key: courseId,
      linkCategory: 'FBE_banner',
      linkName: `${analyticsPageName}_audit_access_expires`,
      linkType: 'link',
      pageName: analyticsPageName,
    });
  };

  let deadlineMessage = null;
  if (upgradeDeadline && upgradeUrl) {
    deadlineMessage = (
      <>
        <br />
        <>
          Nâng cấp trước{' '}
          <FormattedDate
            key="accessExpirationUpgradeDeadline"
            day="numeric"
            month="short"
            year="numeric"
            value={upgradeDeadline}
            {...timezoneFormatArgs}
          />
          {' '}để có quyền truy cập không giới hạn vào khóa học miễn là nó còn tồn tại trên trang web.
        </>
        &nbsp;
        <Hyperlink
          className="font-weight-bold"
          style={{ textDecoration: 'underline' }}
          destination={upgradeUrl}
          onClick={logClick}
        >
          Nâng cấp ngay
        </Hyperlink>
      </>
    );
  }

  return (
    <Alert variant="info" icon={Info}>
      <span className="font-weight-bold">
        Quyền truy cập Kiểm toán hết hạn{' '}
        <FormattedDate
          key="accessExpirationHeaderDate"
          day="numeric"
          month="short"
          year="numeric"
          value={expirationDate}
          {...timezoneFormatArgs}
        />
      </span>
      <br />
      <>
        Bạn sẽ mất tất cả quyền truy cập vào khóa học này, bao gồm cả tiến độ của bạn, vào ngày{' '}
        <FormattedDate
          key="accessExpirationBodyDate"
          day="numeric"
          month="short"
          year="numeric"
          value={expirationDate}
          {...timezoneFormatArgs}
        />.
      </>
      {deadlineMessage}
    </Alert>
  );
};

AccessExpirationAlert.propTypes = {
  payload: PropTypes.shape({
    accessExpiration: PropTypes.shape({
      expirationDate: PropTypes.string.isRequired,
      masqueradingExpiredCourse: PropTypes.bool.isRequired,
      upgradeDeadline: PropTypes.string,
      upgradeUrl: PropTypes.string,
    }).isRequired,
    courseId: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    userTimezone: PropTypes.string.isRequired,
    analyticsPageName: PropTypes.string.isRequired,
  }).isRequired,
};

export default AccessExpirationAlert;
