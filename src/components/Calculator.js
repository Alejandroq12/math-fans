import CalculatorButton from './CalculatorButton';
// import calculate from '../logic/calculate';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-display">
        <input type="text" readOnly value="0" />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="AC" />
        <CalculatorButton value="+/-" />
        <CalculatorButton value="%" />
        <CalculatorButton value="÷" operation />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="7" />
        <CalculatorButton value="8" />
        <CalculatorButton value="9" />
        <CalculatorButton value="x" operation />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="4" />
        <CalculatorButton value="5" />
        <CalculatorButton value="6" />
        <CalculatorButton value="-" operation />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="1" />
        <CalculatorButton value="2" />
        <CalculatorButton value="3" />
        <CalculatorButton value="+" operation />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="0" />
        <CalculatorButton value="." />
        <CalculatorButton value="=" operation />
      </div>
    </div>
  );
}

export default Calculator;
