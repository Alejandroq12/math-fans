import CalculatorButton from './CalculatorButton';

function Calculator() {
  return (
    <div className="calculator">
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
      <div>
        <CalculatorButton value="4" />
        <CalculatorButton value="5" />
        <CalculatorButton value="6" />
        <CalculatorButton value="-" />
      </div>
      <div>
        <CalculatorButton value="1" />
        <CalculatorButton value="2" />
        <CalculatorButton value="3" />
        <CalculatorButton value="+" />
      </div>
      <div>
        <CalculatorButton value="0" />
        <CalculatorButton value="." />
        <CalculatorButton value="=" />
      </div>
    </div>
  );
}

export default Calculator;
