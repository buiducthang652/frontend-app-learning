import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notificationTray: {
    id: 'notification.tray.container',
    defaultMessage: 'Khay thông báo',
    description: 'Khay chứa thông báo',
  },
  openNotificationTrigger: {
    id: 'notification.open.button',
    defaultMessage: 'Hiển thị khay thông báo',
    description: 'Nút để mở khay thông báo và hiển thị thông báo',
  },
  closeNotificationTrigger: {
    id: 'notification.close.button',
    defaultMessage: 'Đóng khay thông báo',
    description: 'Nút để người học đóng thanh bên',
  },
  responsiveCloseNotificationTray: {
    id: 'responsive.close.notification',
    defaultMessage: 'Quay lại khóa học',
    description: 'Nút đáp ứng để quay lại khóa học và đóng khay thông báo',
  },
  notificationTitle: {
    id: 'notification.tray.title',
    defaultMessage: 'Thông báo',
    description: 'Văn bản tiêu đề hiển thị cho khay thông báo',
  },
  noNotificationsMessage: {
    id: 'notification.tray.no.message',
    defaultMessage: 'Hiện tại bạn không có thông báo mới nào.',
    description: 'Văn bản hiển thị khi người học không có thông báo nào',
  },
});

export default messages;
