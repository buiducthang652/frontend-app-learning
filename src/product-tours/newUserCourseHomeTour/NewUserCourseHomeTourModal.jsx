import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';
import {
  ActionRow, Button, MarketingModal, ModalDialog,
} from '@openedx/paragon';

import heroImage from './course_home_tour_modal_hero.png';
import messages from '../messages';

const NewUserCourseHomeTourModal = ({
  isOpen,
  onDismiss,
  onStartTour,
}) => {
  const intl = useIntl();

  return (
    <MarketingModal
      isOpen={isOpen}
      title="New user course home prompt"
      className="new-user-tour-dialog"
      heroIsDark
      hasCloseButton={false}
      heroNode={(
        <ModalDialog.Hero>
          <ModalDialog.Hero.Background
            backgroundSrc={heroImage}
          />
          <ModalDialog.Hero.Content style={{ maxWidth: '20rem' }}>
            <ModalDialog.Title as="h2">
              <span className="text-accent-b">Chào mừng bạn đến với</span> {getConfig().SITE_NAME} khóa học!
            </ModalDialog.Title>
          </ModalDialog.Hero.Content>
        </ModalDialog.Hero>
        )}
      footerNode={(
        <ActionRow>
          <Button
            variant="tertiary"
            onClick={onDismiss}
          >
            Bỏ qua bây giờ
          </Button>
          <Button
            variant="brand"
            onClick={onStartTour}
          >
            Bắt đầu chuyến tham quan
          </Button>
        </ActionRow>
        )}
      onClose={onDismiss}
    >
      <p className="text-dark-900">Hãy tham gia một chuyến tham quan nhanh về {getConfig().SITE_NAME} để bạn có thể tận dụng tối đa khóa học của mình.</p>
    </MarketingModal>
  );
};

NewUserCourseHomeTourModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onStartTour: PropTypes.func.isRequired,
};

export default NewUserCourseHomeTourModal;
