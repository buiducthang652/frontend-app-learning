import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Alert,
  Button,
  Col,
  Row,
} from '@openedx/paragon';

import { useModel } from '../../generic/model-store';
import messages from './messages';

const UpgradeToCompleteAlert = ({ logUpgradeLinkClick }) => {
  const intl = useIntl();
  const {
    courseId,
  } = useSelector(state => state.courseHome);

  const {
    datesBannerInfo,
    hasEnded,
  } = useModel('dates', courseId);

  const {
    contentTypeGatingEnabled,
    missedDeadlines,
    verifiedUpgradeLink,
  } = datesBannerInfo;

  if (!contentTypeGatingEnabled || missedDeadlines || hasEnded || !verifiedUpgradeLink) {
    return null;
  }

  return (
    <Alert className="bg-light-200">
      <Row className="w-100 m-0">
        <Col xs={12} md={9} className="small p-0 pr-md-2">
          <Alert.Heading>Nâng cấp để hoàn thành khóa học</Alert.Heading>
          Bạn đang truy cập phiên bản miễn phí của khóa học này, điều này có nghĩa là bạn có thể xem nội dung nhưng không thể truy cập một số bài tập đã được chấm điểm. Để truy cập bài tập đã được chấm điểm và hoàn thành khóa học này, hãy nâng cấp ngay.
        </Col>
        <Col xs={12} md={3} className="align-self-center text-right mt-3 mt-md-0 p-0">
          <Button
            variant="brand"
            size="sm"
            className="w-xs-100 w-md-auto"
            onClick={() => {
              logUpgradeLinkClick();
              global.location.replace(verifiedUpgradeLink);
            }}
          >
            Nâng cấp ngay
          </Button>
        </Col>
      </Row>
    </Alert>
  );
};

UpgradeToCompleteAlert.propTypes = {
  logUpgradeLinkClick: PropTypes.func,
};

UpgradeToCompleteAlert.defaultProps = {
  logUpgradeLinkClick: () => {},
};

export default UpgradeToCompleteAlert;
