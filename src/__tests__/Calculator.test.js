import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('should update the display when buttons are clicked', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(getByDisplayValue('3')).toBeInTheDocument();
  });
});
