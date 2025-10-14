import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Icon } from '@openedx/paragon';
import { Block } from '@openedx/paragon/icons';

import messages from '../messages';

interface Props {}

const HiddenSequenceLink: React.FC<Props> = () => {
  const intl = useIntl();

  return (
    <div className="row w-100 my-2 mx-4 pl-3">
      <span className="small d-flex">
        <Icon className="mr-2" src={Block} data-testid="hide-from-toc-sequence-link-icon" />
        <span data-testid="hide-from-toc-sequence-link-text">
          Nội dung này bị ẩn khỏi mục lục khóa học.
        </span>
      </span>
    </div>
  );
};

export default HiddenSequenceLink;
