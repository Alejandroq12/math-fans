import operate from '../logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  it('should subtract two numbers', () => {
    const result = operate(7, 2, '-');
    expect(result).toBe('5');
  });

  it('should multiply two numbers', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  it('should divide two numbers', () => {
    const result = operate(6, 2, '÷');
    expect(result).toBe('3');
  });

  it('should return error message when dividing by zero', () => {
    const result = operate(6, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should calculate modulo', () => {
    const result = operate(10, 3, '%');
    expect(result).toBe('1');
  });

  it('should return error message when finding modulo with zero', () => {
    const result = operate(6, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw error for unknown operation', () => {
    expect(() => operate(2, 3, '^')).toThrow("Unknown operation '^'");
  });
});
