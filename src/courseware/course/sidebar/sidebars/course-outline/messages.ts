import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  loading: {
    id: 'courseOutline.loading',
    defaultMessage: 'Đang tải...',
    description: 'Văn bản dành cho trình đọc màn hình sử dụng trên biểu tượng xoay khi thanh bên đang tải.',
  },
  toggleCourseOutlineTrigger: {
    id: 'courseOutline.toggle.button',
    defaultMessage: 'Chuyển đổi khay đề cương khóa học',
    description: 'Nút để người học chuyển đổi thanh bên.',
  },
  courseOutlineTitle: {
    id: 'courseOutline.tray.title',
    defaultMessage: 'Đề cương khóa học',
    description: 'Văn bản tiêu đề hiển thị cho khay đề cương khóa học.',
  },
  completedUnit: {
    id: 'courseOutline.completedUnit',
    defaultMessage: 'Đơn vị đã hoàn thành',
    description: 'Văn bản được sử dụng để mô tả biểu tượng dấu kiểm màu xanh lá cây trước tiêu đề của một đơn vị.',
  },
  incompleteUnit: {
    id: 'courseOutline.incompleteUnit',
    defaultMessage: 'Đơn vị chưa hoàn thành',
    description: 'Văn bản được sử dụng để mô tả biểu tượng dấu kiểm màu xám trước tiêu đề của một đơn vị.',
  },
});

export default messages;
