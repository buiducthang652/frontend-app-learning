import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import { useContextId } from '../../../../data/hooks';

import messages from '../messages';
import { useModel } from '../../../../generic/model-store';

const DroppableAssignmentFootnote = ({ footnotes }) => {
  const intl = useIntl();
  const courseId = useContextId();
  const {
    gradesFeatureIsFullyLocked,
  } = useModel('progress', courseId);
  return (
    <>
      <span id="grade-summary-footnote-label" className="sr-only">Chú thích</span>
      <ul className="list-unstyled mt-2">
        {footnotes.map((footnote, index) => (
          <li id={`${footnote.id}-footnote`} key={footnote.id} className="x-small mt-1">
            <sup>{index + 1}</sup>
            {footnote.numDroppable} điểm {footnote.assignmentType} thấp nhất sẽ bị loại bỏ.
            <a className="sr-only" href={`#${footnote.id}-ref`} tabIndex={gradesFeatureIsFullyLocked ? '-1' : '0'}>
              Quay lại nội dung
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

DroppableAssignmentFootnote.propTypes = {
  footnotes: PropTypes.arrayOf(PropTypes.shape({
    assignmentType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    numDroppable: PropTypes.number.isRequired,
  })).isRequired,
};

export default DroppableAssignmentFootnote;
