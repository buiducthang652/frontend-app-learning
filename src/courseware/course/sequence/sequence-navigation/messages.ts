import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  nextButton: {
    id: 'learn.sequence.navigation.next.button',
    defaultMessage: 'Tiếp theo',
    description: 'Nút để chuyển đến phần tiếp theo',
  },
  nextUpButton: {
    id: 'learn.sequence.navigation.next.up.button',
    defaultMessage: 'Tiếp theo: {title}',
    description: 'Nút để chuyển đến phần tiếp theo, kèm tiêu đề',
  },
  previousButton: {
    id: 'learn.sequence.navigation.previous.button',
    defaultMessage: 'Trước đó',
    description: 'Nút để quay lại phần trước đó',
  },
});

export default messages;
