import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  close: {
    id: 'general.altText.close',
    defaultMessage: 'Đóng',
    description: 'Văn bản được sử dụng làm aria-label để mô tả việc đóng hoặc hủy bỏ một thành phần',
  },
  registerLowercase: {
    id: 'learning.logistration.register', // ID left for historical purposes
    defaultMessage: 'đăng ký',
    description: 'Văn bản trong một liên kết, nhắc nhở người dùng tạo tài khoản. Được sử dụng trong "learning.logistration.alert"',
  },
  signInLowercase: {
    id: 'learning.logistration.login', // ID left for historical purposes
    defaultMessage: 'đăng nhập',
    description: 'Văn bản trong một liên kết, nhắc nhở người dùng đăng nhập. Được sử dụng trong "learning.logistration.alert"',
  },
  signInSentenceCase: {
    id: 'general.signIn.sentenceCase',
    defaultMessage: 'Đăng nhập',
    description: 'Văn bản trong một nút, nhắc nhở người dùng đăng nhập.',
  },
  pageNotFoundHeader: {
    id: 'learning.pageNotFound.header',
    defaultMessage: 'Không tìm thấy trang',
    description: 'Văn bản cho tiêu đề thông báo rằng không tìm thấy trang',
  },
  pageNotFoundBody: {
    id: 'learning.pageNotFound.body',
    defaultMessage: 'Trang bạn đang tìm kiếm không được tìm thấy. Quay lại {homepageLink}.',
    description: 'Văn bản cho nội dung, nhắc nhở người dùng quay lại trang chủ',
  },
  homepageLink: {
    id: 'learning.pageNotFound.body.homepageLink.label',
    defaultMessage: 'trang chủ',
    description: 'Văn bản cho URL, cho biết trang mà họ sẽ được điều hướng đến',
  },
});

export default messages;