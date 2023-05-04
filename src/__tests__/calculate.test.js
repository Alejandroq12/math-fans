import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should reset the state when buttonName is AC', () => {
    const result = calculate({ total: '6', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should add a decimal point to the current number when buttonName is "."', () => {
    const result = calculate({ total: '6', next: '3', operation: null }, '.');
    expect(result).toEqual({ total: '6', next: '3.', operation: null });
  });
});
