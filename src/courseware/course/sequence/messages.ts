import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerPlaceholder: {
    id: 'learn.header.h2.placeholder',
    defaultMessage: 'Các tiêu đề cấp 2 có thể được tạo bởi nhà cung cấp khóa học trong tương lai.',
    description: 'Thông báo được đọc bởi trình đọc màn hình cho biết thẻ h2 là một trình giữ chỗ.',
  },
  loadFailure: {
    id: 'learn.course.load.failure',
    defaultMessage: 'Đã xảy ra lỗi khi tải khóa học này.',
    description: 'Thông báo khi một khóa học không tải được',
  },
  loadingHonorCode: {
    id: 'learn.loading.honor.codk',
    defaultMessage: 'Đang tải thông điệp về quy tắc danh dự...',
    description: 'Thông báo hiển thị khi giao diện về quy tắc danh dự đang được tải',
  },
  loadingLockedContent: {
    id: 'learn.loading.content.lock',
    defaultMessage: 'Đang tải thông điệp về nội dung bị khóa...',
    description: 'Thông báo hiển thị khi giao diện về nội dung bị khóa đang được tải',
  },
  loadingSequence: {
    id: 'learn.loading.learning.sequence',
    defaultMessage: 'Đang tải chuỗi học tập...',
    description: 'Thông báo khi chuỗi học tập đang được tải',
  },
  noContent: {
    id: 'learn.sequence.no.content',
    defaultMessage: 'Không có nội dung nào ở đây.',
    description: 'Thông báo hiển thị khi không có nội dung nào để hiển thị cho người dùng trong một chuỗi học tập.',
  },
});

export default messages;
