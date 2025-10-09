import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  completed: {
    id: 'learning.celebration.completed',
    defaultMessage: 'Bạn vừa hoàn thành phần đầu tiên của khóa học.',
    description: 'Hiển thị một lần khi người học hoàn thành phần đầu tiên của khóa học',
  },
  congrats: {
    id: 'learning.celebration.congrats',
    defaultMessage: 'Chúc mừng bạn!',
    description: 'Lời chúc mừng khi người học hoàn thành mục tiêu hàng tuần hoặc phần đầu tiên',
  },
  earned: {
    id: 'learning.celebration.earned',
    defaultMessage: 'Bạn xứng đáng với điều đó!',
    description: 'Hiển thị bên dưới lời chúc mừng khi người học hoàn thành mục tiêu',
  },
  emailSubject: {
    id: 'learning.celebration.emailSubject',
    defaultMessage: 'Tôi đang trên hành trình hoàn thành {title} trực tuyến cùng {platform}!',
    description: 'Tiêu đề email khi chia sẻ tiến độ học tập',
  },
  forward: {
    id: 'learning.celebration.forward',
    defaultMessage: 'Tiếp tục học',
    description: 'Nút đóng hộp thoại chúc mừng và quay lại khóa học',
  },
  goalMet: {
    id: 'learning.celebration.goalMet',
    defaultMessage: 'Bạn đã đạt được mục tiêu của mình!',
    description: 'Tiêu đề khi người học hoàn thành mục tiêu hàng tuần trong khóa học',
  },
  keepItUp: {
    id: 'learning.celebration.keepItUp',
    defaultMessage: 'Hãy duy trì phong độ nhé!',
    description: 'Nút đóng hộp thoại chúc mừng và quay lại khóa học',
  },
  share: {
    id: 'learning.celebration.share',
    defaultMessage: 'Hãy dành chút thời gian để ăn mừng và chia sẻ tiến độ học tập của bạn.',
    description: 'Văn bản hiển thị trước biểu tượng chia sẻ khi đạt mục tiêu',
  },
  socialMessage: {
    id: 'learning.celebration.social',
    defaultMessage: 'Tôi đang trên hành trình hoàn thành {title} trực tuyến cùng {platform}. Còn bạn, bạn đang học gì hôm nay?',
    description: 'Thông điệp khi chia sẻ tiến độ học tập lên mạng xã hội',
  },
});

export default messages;
