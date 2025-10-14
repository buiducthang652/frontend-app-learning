import { useIntl } from '@edx/frontend-platform/i18n';

import CompletionDonutChart from './CompletionDonutChart';
import messages from './messages';

const CourseCompletion = () => {
  const intl = useIntl();

  return (
    <section className="text-dark-700 mb-4 rounded raised-card p-4">
      <div className="row w-100 m-0">
        <div className="col-12 col-sm-6 col-md-7 p-0">
          <h2>Hoàn thành khóa học</h2>
          <p className="small">
            Biểu đồ này thể hiện phần trăm nội dung khóa học mà bạn đã hoàn thành.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-5 mt-sm-n3 p-0 text-center">
          <CompletionDonutChart />
        </div>
      </div>
    </section>
  );
};

export default CourseCompletion;
