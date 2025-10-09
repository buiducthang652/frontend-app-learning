import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  discussionsTitle: {
    id: 'discussions.sidebar.title',
    defaultMessage: 'Thảo luận',
    description: 'Tiêu đề cho diễn đàn nơi người học có thể thảo luận về các chủ đề trong khóa học',
  },
  discussionNotificationTray: {
    id: 'discussions.notification.tray.container',
    defaultMessage: 'Khu vực thảo luận và thông báo',
    description: 'Vùng chứa cho phần thảo luận và thông báo',
  },
  notificationTitle: {
    id: 'notification.tray.title',
    defaultMessage: 'Thông báo',
    description: 'Tiêu đề hiển thị cho khay thông báo',
  },
  closeTrigger: {
    id: 'tray.close.button',
    defaultMessage: 'Đóng khay',
    description: 'Nút để người học đóng thanh bên',
  },
  openSidebarTrigger: {
    id: 'sidebar.open.button',
    defaultMessage: 'Hiển thị thanh bên',
    description: 'Nút mở thanh bên để xem thông báo và thảo luận',
  },
  responsiveCloseSidebarTray: {
    id: 'responsive.close.sidebar',
    defaultMessage: 'Quay lại khóa học',
    description: 'Nút phản hồi để quay lại khóa học và đóng thanh bên',
  },
});

export default messages;
