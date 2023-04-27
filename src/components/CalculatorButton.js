// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CalculatorButton({ value, operation }) {
  return (
    <button
      type="button"
      className={`calculator-button calculator-button-${value} calculator-button${
        operation ? ' operation' : ''
      }`}
    >
      {value}
    </button>
  );
}

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  operation: PropTypes.bool,
};

CalculatorButton.defaultProps = {
  operation: false,
};

export default CalculatorButton;
