import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders the header title correctly', () => {
    render(<Header />);

    expect(screen.getByText('Acumulado Grilla')).toBeInTheDocument();
  });
});
