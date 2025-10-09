import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'learn.lockPaywall.title': {
    id: 'learn.lockPaywall.title',
    defaultMessage: 'Các bài tập có điểm số đã bị khóa',
    description: 'Tiêu đề cho thông báo hiển thị rằng một phần nội dung không khả dụng đối với người dùng theo dõi kiểm tra.',
  },
  'learn.lockPaywall.content': {
    id: 'learn.lockPaywall.content',
    defaultMessage: 'Nâng cấp để truy cập các tính năng bị khóa như tính năng này và tận dụng tối đa khóa học của bạn.',
    description: 'Thông báo hiển thị rằng một phần nội dung không khả dụng đối với người dùng theo dõi kiểm tra.',
  },
  'learn.lockPaywall.content.pastExpiration': {
    id: 'learn.lockPaywall.content.pastExpiration',
    defaultMessage: 'Hạn chót nâng cấp cho khóa học này đã qua. Để nâng cấp, hãy đăng ký vào phiên học tiếp theo có sẵn.',
    description: 'Thông báo hiển thị rằng một phần nội dung không khả dụng đối với người dùng theo dõi kiểm tra trong một khóa học đã hết hạn.',
  },
  'learn.lockPaywall.courseDetails': {
    id: 'learn.lockPaywall.courseDetails',
    defaultMessage: 'Xem chi tiết khóa học',
    description: 'Liên kết đến trang chi tiết khóa học cho khóa học có ngày hết hạn đã qua.',
  },
  'learn.lockPaywall.example.alt': {
    id: 'learn.lockPaywall.example.alt',
    defaultMessage: 'Chứng chỉ mẫu',
    description: 'Văn bản thay thế hiển thị khi hình ảnh chứng chỉ mẫu không thể hiển thị.',
  },
  'learn.lockPaywall.list.intro': {
    id: 'learn.lockPaywall.list.intro',
    defaultMessage: 'Khi bạn nâng cấp, bạn sẽ:',
    description: 'Văn bản hiển thị để giới thiệu danh sách các lợi ích từ việc nâng cấp.',
  },
});

export default messages;
