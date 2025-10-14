import PropTypes from 'prop-types';
import { SearchField } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';

const CoursewareSearchForm = ({
  searchTerm,
  onSubmit,
  onChange,
  placeholder,
}) => {
  const { formatMessage } = useIntl();

  return (
    <SearchField.Advanced
      value={searchTerm}
      onSubmit={onSubmit}
      onChange={onChange}
      submitButtonLocation="external"
      className="courseware-search-form"
      screenReaderText={{
        label: 'Tìm kiếm',
        clearButton: 'Xóa tìm kiếm',
        submitButton: null, // Remove the sr-only label in the button.
      }}
    >
      <div className="pgn__searchfield_wrapper" data-testid="courseware-search-form">
        <SearchField.Label />
        <SearchField.Input placeholder={placeholder} autoFocus />
        <SearchField.ClearButton />
      </div>
      <SearchField.SubmitButton
        buttonText="Tìm kiếm"
        submitButtonLocation="external"
        data-testid="courseware-search-form-submit"
      />
    </SearchField.Advanced>
  );
};

CoursewareSearchForm.propTypes = {
  searchTerm: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

CoursewareSearchForm.defaultProps = {
  searchTerm: undefined,
  onSubmit: undefined,
  onChange: undefined,
  placeholder: undefined,
};

export default CoursewareSearchForm;
