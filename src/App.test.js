import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "National Parks" heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/National Parks/i);
  expect(headingElement).toBeInTheDocument();
});
