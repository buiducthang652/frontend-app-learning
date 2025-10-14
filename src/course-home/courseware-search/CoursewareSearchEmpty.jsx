import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';

const CoursewareSearchEmpty = () => {
  const intl = useIntl();
  return (
    <div className="courseware-search-results">
      <p className="courseware-search-results__empty" data-testid="no-results">Không tìm thấy kết quả.</p>
    </div>
  );
};

export default CoursewareSearchEmpty;
