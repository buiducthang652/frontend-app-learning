import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

const SuggestedScheduleHeader = () => {
  const intl = useIntl();
  return (
    <p className="large">
      Lịch trình gợi ý
    </p>
  );
};

export default SuggestedScheduleHeader;
