import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  alert: {
    id: 'learning.enrollment.alert',
    defaultMessage: 'Bạn phải đăng ký khóa học để xem nội dung khóa học.',
    description: 'Thông báo hiển thị để chỉ ra rằng người dùng cần đăng ký khóa học trước khi xem nội dung khóa học. Được hiển thị như một cảnh báo, cùng với một liên kết để đăng ký.',
  },
  staffAlert: {
    id: 'learning.staff.enrollment.alert',
    defaultMessage: 'Bạn đang xem khóa học này với tư cách là nhân viên và chưa đăng ký.',
    description: 'Thông báo hiển thị để chỉ ra rằng người dùng chưa đăng ký, nhưng vẫn có thể xem khóa học vì họ là nhân viên. Được hiển thị như một cảnh báo, cùng với một liên kết để đăng ký.',
  },
  enrollNowInline: {
    id: 'learning.enrollment.enrollNow.Inline',
    defaultMessage: 'Đăng ký ngay',
    description: 'Một liên kết nhắc người dùng nhấp vào để đăng ký khóa học hiện tại. Văn bản này được sử dụng ở đầu câu (ví dụ: Đăng ký ngay để xem nội dung khóa học.)',
  },
  enrollNowSentence: {
    id: 'learning.enrollment.enrollNow.Sentence',
    defaultMessage: 'Đăng ký ngay.',
    description: 'Một liên kết nhắc người dùng nhấp vào để đăng ký khóa học hiện tại.',
  },
  success: {
    id: 'learning.enrollment.success',
    defaultMessage: 'Bạn đã đăng ký thành công khóa học này!',
    description: 'Thông báo cho người dùng biết rằng họ đã đăng ký khóa học thành công.',
  },
});

export default messages;
