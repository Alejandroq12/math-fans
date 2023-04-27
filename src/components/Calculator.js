import CalculatorButton from './CalculatorButton';

function Calculator() {
  return (
    <>
      <h1>Calculator</h1>
      <div>
        <input type="text" readOnly />
      </div>
      <div>
        <CalculatorButton value="AC" />
        <CalculatorButton value="+/-" />
        <CalculatorButton value="%" />
        <CalculatorButton value="÷" />
      </div>
    </>
  );
}

export default Calculator;
