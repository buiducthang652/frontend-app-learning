import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  congratulations: {
    id: 'learning.streakCelebration.congratulations',
    defaultMessage: 'Chúc mừng!',
    description: 'Hiển thị cho người học khi họ sử dụng ứng dụng học tập liên tục trong X ngày',
  },
  streakBody: {
    id: 'learning.streakCelebration.body',
    defaultMessage: 'Tiếp tục nhé, bạn đang làm rất tốt!',
  },
  streakButton: {
    id: 'learning.streakCelebration.button',
    defaultMessage: 'Tiếp tục',
    description: 'Văn bản trên nút đóng hộp thoại chúc mừng',
  },
  streakButtonSrOnly: {
    id: 'learning.streakCelebration.buttonSrOnly',
    defaultMessage: 'Đóng modal và tiếp tục',
    description: 'Nhãn dành cho trình đọc màn hình cho văn bản streakButton',
  },
  streakButtonAA759: {
    id: 'learning.streakCelebration.buttonAA759',
    defaultMessage: 'Tiếp tục với khóa học',
  },
  streakHeader: {
    id: 'learning.streakCelebration.header',
    defaultMessage: 'chuỗi ngày',
    description: 'Sẽ xuất hiện sau một con số. Ví dụ: chuỗi 3 ngày',
  },
  streakFactoidABoldedSection: {
    id: 'learning.streakCelebration.factoidABoldedSection',
    defaultMessage: 'có khả năng vượt qua khóa học cao hơn 20 lần',
    description: 'Phần in đậm này nằm trong câu sau: Người dùng học 3 ngày liên tiếp {bolded_section} so với những người không học.',
  },
  streakFactoidBBoldedSection: {
    id: 'learning.streakCelebration.factoidBBoldedSection',
    defaultMessage: 'hoàn thành nội dung khóa học nhiều hơn trung bình 5 lần',
    description: 'Phần in đậm này nằm trong câu sau: Người dùng học 3 ngày liên tiếp {bolded_section} so với những người không học.',
  },
  streakDiscountMessage: {
    id: 'learning.streakCelebration.streakDiscountMessage',
    defaultMessage: 'Bạn đã mở khóa giảm giá {percent}% khi nâng cấp khóa học này trong thời gian giới hạn.',
    description: 'Thông báo này mô tả giảm giá mà người dùng đủ điều kiện nhận được khi họ đạt chuỗi 3 ngày',
  },
});

export default messages;
