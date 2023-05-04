import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navbar component', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const navbarName = screen.getByText('Math Fans');
  expect(navbarName).toBeInTheDocument();

  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();

  const calculatorLink = screen.getByText('Calculator');
  expect(calculatorLink).toBeInTheDocument();

  const quoteLink = screen.getByText('Quote');
  expect(quoteLink).toBeInTheDocument();
});
