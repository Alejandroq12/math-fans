// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CalculatorButton({ value }) {
  return (
    <button
      type="button"
      className={`calculator-button calculator-button-${value}`}
    >
      {value}
    </button>
  );
}

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorButton;
