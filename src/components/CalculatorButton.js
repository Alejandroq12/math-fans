import PropTypes from 'prop-types';

function CalculatorButton({ value, operation, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button
      type="button"
      className={`calculator-button calculator-button-${value} calculator-button${
        operation ? ' operation' : ''
      }`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  operation: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

CalculatorButton.defaultProps = {
  operation: false,
};

export default CalculatorButton;
