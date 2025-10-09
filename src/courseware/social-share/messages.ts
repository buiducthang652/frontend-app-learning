import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  defaultEmailBody: {
    id: 'learning.celebration.emailBody',
    defaultMessage: 'Bạn đang dành thời gian học gì?',
    description: 'Nội dung khi chia sẻ tiến độ khóa học qua email',
  },
  shareEmail: {
    id: 'learning.social.shareEmail',
    defaultMessage: 'Chia sẻ tiến độ của bạn qua email.',
    description: 'Nút chia sẻ email',
  },
  shareService: {
    id: 'learning.social.shareService',
    defaultMessage: 'Chia sẻ tiến độ của bạn trên {service}.',
  },
});

export default messages;
