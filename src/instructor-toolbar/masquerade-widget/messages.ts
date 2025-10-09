import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  genericError: {
    id: 'masquerade-widget.userName.error.generic',
    defaultMessage: 'Đã xảy ra lỗi; vui lòng thử lại.',
    description: 'Thông báo hiển thị sau khi xảy ra lỗi chung khi cố gắng giả danh',
  },
  placeholder: {
    id: 'masquerade-widget.userName.input.placeholder',
    defaultMessage: 'Tên người dùng hoặc email',
    description: 'Văn bản gợi ý để nhập tên người dùng hoặc email để giả danh',
  },
  userNameLabel: {
    id: 'masquerade-widget.userName.input.label',
    defaultMessage: 'Giả danh người dùng này',
    description: 'Nhãn cho trường nhập tên người dùng để giả danh',
  },
  titleViewAs: {
    id: 'instructor.toolbar.view.as',
    defaultMessage: 'Xem khóa học này như:',
    description: 'Nút để xem khóa học này như',
  },
  titleStaff: {
    id: 'instructor.toolbar.staff',
    defaultMessage: 'Nhân viên',
    description: 'Nút Nhân viên',
  },
});

export default messages;
