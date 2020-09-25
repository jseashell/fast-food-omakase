import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders creations table header', () => {
  const { getByText } = render(<App />);

  const idElement = getByText(/ID/i);
  expect(idElement).toBeInTheDocument();

  const nameElement = getByText(/Name/i);
  expect(nameElement).toBeInTheDocument();

  const imageElement = getByText(/Image/i);
  expect(imageElement).toBeInTheDocument();

  const userElement = getByText(/User/i);
  expect(userElement).toBeInTheDocument();
});
