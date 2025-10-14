import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Hyperlink } from '@openedx/paragon';

import messages from './messages';
import { ReactComponent as UnsubscribeIcon } from './unsubscribe.svg';

const ResultPage = ({ courseTitle, error }) => {
  const intl = useIntl();
  const errorDescription = (
    <>
      Chúng tôi không thể hủy đăng ký email nhắc nhở mục tiêu cho bạn. Vui lòng thử lại sau hoặc{' '}
      <Hyperlink
        className="text-reset"
        style={{ textDecoration: 'underline' }}
        destination={`${getConfig().CONTACT_URL}`}
      >
        liên hệ hỗ trợ
      </Hyperlink>
      {' '}để được trợ giúp.
    </>
  );

  const header = error
    ? 'Đã xảy ra lỗi'
    : 'Bạn đã hủy đăng ký nhắc nhở mục tiêu';
  const description = error
    ? errorDescription
    : `Bạn sẽ không còn nhận được email nhắc nhở về mục tiêu của bạn cho ${courseTitle}.`;

  return (
    <>
      <UnsubscribeIcon className="text-primary" alt="" />
      <div role="heading" aria-level="1" className="h2">{header}</div>
      <div className="row justify-content-center">
        <div className="col-xl-7 col-12 p-0">{description}</div>
      </div>
      <Button variant="brand" href={`${getConfig().LMS_BASE_URL}/dashboard`} className="mt-4">
        Đi đến bảng điều khiển
      </Button>
    </>
  );
};

ResultPage.defaultProps = {
  courseTitle: null,
  error: false,
};

ResultPage.propTypes = {
  courseTitle: PropTypes.string,
  error: PropTypes.bool,
};

export default ResultPage;
