import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'learn.contentLock.content.locked': {
    id: 'learn.contentLock.content.locked',
    defaultMessage: 'Nội dung bị khóa',
    description: 'Thông báo hiển thị để chỉ ra rằng một phần nội dung không khả dụng và có điều kiện tiên quyết.',
  },
  'learn.contentLock.complete.prerequisite': {
    id: 'learn.contentLock.complete.prerequisite',
    defaultMessage: "Bạn phải hoàn thành điều kiện tiên quyết: ''{prereqSectionName}'' để truy cập nội dung này.",
    description: 'Thông báo hiển thị để chỉ ra điều kiện tiên quyết mà học viên phải hoàn thành trước khi truy cập nội dung bị khóa. {prereqSectionName} là tên của điều kiện tiên quyết.',
  },
  'learn.contentLock.goToSection': {
    id: 'learn.contentLock.goToSection',
    defaultMessage: 'Đi đến phần điều kiện tiên quyết',
    description: 'Nút mà người dùng có thể nhấp vào để điều hướng trình duyệt của họ đến điều kiện tiên quyết của phần này.',
  },
});

export default messages;
