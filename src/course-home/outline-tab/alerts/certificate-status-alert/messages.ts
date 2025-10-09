import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  certStatusEarnedNotAvailableHeader: {
    id: 'cert.alert.earned.unavailable.header.v2',
    defaultMessage: 'Điểm số và trạng thái chứng chỉ của bạn sẽ sớm được cập nhật.',
    description: 'Tiêu đề thông báo người dùng rằng chứng chỉ của họ sẽ sớm có sẵn.',
  },
  certStatusDownloadableHeader: {
    id: 'cert.alert.earned.ready.header',
    defaultMessage: 'Chúc mừng! Chứng chỉ của bạn đã sẵn sàng.',
    description: 'Tiêu đề thông báo người dùng rằng chứng chỉ của họ đã sẵn sàng.',
  },
  certStatusNotPassingHeader: {
    id: 'cert.alert.notPassing.header',
    defaultMessage: 'Bạn chưa đủ điều kiện để nhận chứng chỉ',
  },
  certStatusNotPassingButton: {
    id: 'cert.alert.notPassing.button',
    defaultMessage: 'Xem điểm',
  },
});

export default messages;
