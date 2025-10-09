import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  header: {
    id: 'learn.hiddenAfterDue.header',
    defaultMessage: 'Hạn chót cho bài tập này đã qua.',
    description: 'Hiển thị khi nội dung của một khóa học không còn khả dụng vì đã qua hạn chót',
  },
  description: {
    id: 'learn.hiddenAfterDue.description',
    defaultMessage: 'Vì đã qua hạn chót, bài tập này không còn khả dụng.',
    description: 'Giải thích lý do tại sao nội dung không khả dụng',
  },
  gradeAvailable: {
    id: 'learn.hiddenAfterDue.gradeAvailable',
    defaultMessage: 'Nếu bạn đã hoàn thành bài tập này, điểm của bạn có sẵn trên {progressPage}.',
    description: 'Văn bản đi trước liên kết chuyển hướng đến trang tiến độ',
  },
  progressPage: {
    id: 'learn.hiddenAfterDue.progressPage',
    defaultMessage: 'trang tiến độ',
    description: 'Đây là văn bản cho liên kết được nhúng trong learn.hiddenAfterDue.gradeAvailable',
  },
});

export default messages;
