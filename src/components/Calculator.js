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
      <div>
        <CalculatorButton value="7" />
        <CalculatorButton value="8" />
        <CalculatorButton value="9" />
        <CalculatorButton value="x" />
      </div>
    </>
  );
}

export default Calculator;
