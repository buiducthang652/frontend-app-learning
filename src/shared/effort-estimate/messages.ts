import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  activities: {
    id: 'learning.effortEstimation.activities',
    defaultMessage: '{activityCount, plural, one {# hoạt động} other {# hoạt động}}',
  },
  minutesAbbreviated: {
    id: 'learning.effortEstimation.minutesAbbreviated',
    defaultMessage: '{minuteCount, plural, one {# phút} other {# phút}}',
    description: 'Số phút được viết tắt một cách ngắn gọn: 5 phút',
  },
  minutesFull: {
    id: 'learning.effortEstimation.minutesFull',
    defaultMessage: '{minuteCount, plural, one {# phút} other {# phút}}',
    description: 'Số phút được viết đầy đủ: 5 phút',
  },
});

export default messages;
