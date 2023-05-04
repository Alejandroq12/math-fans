import { render, fireEvent } from '@testing-library/react';
import CalculatorButton from '../components/CalculatorButton';

describe('CalculatorButton', () => {
  it('renders the calculator button component', () => {
    const onClick = jest.fn();
    const { asFragment } = render(<CalculatorButton value="1" onClick={onClick} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onClick when button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<CalculatorButton value="1" onClick={onClick} />);
    fireEvent.click(getByText('1'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
