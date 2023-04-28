import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCalculatorState((prevState) => calculate(prevState, buttonName));
  };

  const displayValue = () => {
    if (calculatorState.operation && !calculatorState.next) {
      return `${calculatorState.total || ''} ${calculatorState.operation}`;
    } if (calculatorState.next && calculatorState.operation) {
      return `${calculatorState.total || ''} ${calculatorState.operation} ${
        calculatorState.next
      }`;
    }
    return calculatorState.next || calculatorState.total || '0';
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input type="text" readOnly value={displayValue()} />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="AC" onClick={handleClick} />
        <CalculatorButton value="+/-" onClick={handleClick} />
        <CalculatorButton value="%" onClick={handleClick} />
        <CalculatorButton value="÷" operation onClick={handleClick} />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="7" onClick={handleClick} />
        <CalculatorButton value="8" onClick={handleClick} />
        <CalculatorButton value="9" onClick={handleClick} />
        <CalculatorButton value="x" operation onClick={handleClick} />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="4" onClick={handleClick} />
        <CalculatorButton value="5" onClick={handleClick} />
        <CalculatorButton value="6" onClick={handleClick} />
        <CalculatorButton value="-" operation onClick={handleClick} />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="1" onClick={handleClick} />
        <CalculatorButton value="2" onClick={handleClick} />
        <CalculatorButton value="3" onClick={handleClick} />
        <CalculatorButton value="+" operation onClick={handleClick} />
      </div>
      <div className="calculator-row">
        <CalculatorButton value="0" onClick={handleClick} />
        <CalculatorButton value="." onClick={handleClick} />
        <CalculatorButton value="=" operation onClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
