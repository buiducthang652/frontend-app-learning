import React from 'react';
import PropTypes from 'prop-types';

import { getConfig } from '@edx/frontend-platform';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';
import { Alert, Button, Hyperlink } from '@openedx/paragon';
import certImage from '../../../generic/assets/openedx_certificate.png';
import messages from './messages';

/**
 * Note for Open edX developers:
 * There are pieces of this component that are hard-coded and specific to edX that may not apply to your organization.
 * This includes mentions of our edX program types (MicroMasters, MicroBachelors, Professional Certificate, and
 * XSeries), along with their respective support article URLs and image variable names.
 *
 * Currently, this component will not render unless the learner's completed course has a related program of one of the
 * four aforementioned types. This will not impact the parent components (i.e. CourseCelebration will render normally).
 */

const programTypes = ['microbachelors', 'micromasters', 'professional-certificate', 'xseries'];

const ProgramCompletion = ({
  progress,
  title,
  type,
  url,
}) => {
  const intl = useIntl();
  if (!programTypes.includes(type) || progress.notStarted !== 0 || progress.inProgress !== 0) {
    return null;
  }

  const programLink = (
    <Hyperlink
      style={{ textDecoration: 'underline' }}
      destination={url}
      className="text-reset"
    >
      Bảng điều khiển
    </Hyperlink>
  );

  return (
    <Alert variant="primary" className="my-3" data-testid="program-completion">
      <div className="d-flex">
        <div className="col order-1 order-md-0 pl-0 pr-0 pr-md-5">
          <div className="h4">Chúc mừng, bạn đã hoàn thành khóa học cuối cùng trong chương trình {title}!</div>
          <p>
            Để xem trạng thái chứng chỉ của bạn, hãy kiểm tra phần Chương trình trong {programLink} của bạn.
          </p>
          {type === 'microbachelors' && (
            <>
              <p>
                <Hyperlink
                  style={{ textDecoration: 'underline' }}
                  destination={`${getConfig().SUPPORT_URL}/hc/en-us/articles/360004623154`}
                  className="text-reset"
                >
                  Tìm hiểu thêm về MicroBachelors
                </Hyperlink>
              </p>
              <Button variant="primary" className="mb-2 mb-sm-0" href={`${getConfig().CREDENTIALS_BASE_URL}/records`}>
                Nộp đơn xin tín chỉ
              </Button>
            </>
          )}
          {type === 'micromasters' && (
            <p>
              Chúc mừng! Chứng chỉ MicroMasters của bạn cho thấy bạn đã thành thạo một lĩnh vực cụ thể ở mức độ sau đại học.
              {' '}
              <Hyperlink
                style={{ textDecoration: 'underline' }}
                destination={`${getConfig().SUPPORT_URL}/hc/en-us/articles/360010346853-Does-a-Micromasters-certificate-count-towards-the-online-Master-s-degree-`}
                className="text-reset"
              >
                Tìm hiểu thêm
              </Hyperlink>
            </p>
          )}
        </div>
        <div className="col-12 order-0 col-md-3 order-md-1 w-100 mb-3 p-0 text-center">
          <img
            src={certImage}
            alt="Hình ảnh chứng chỉ"
            className="w-100"
            style={{ maxWidth: '13rem' }}
            data-testid={type}
          />
        </div>
      </div>
    </Alert>
  );
};

ProgramCompletion.propTypes = {
  progress: PropTypes.shape({
    completed: PropTypes.number.isRequired,
    inProgress: PropTypes.number.isRequired,
    notStarted: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProgramCompletion;
