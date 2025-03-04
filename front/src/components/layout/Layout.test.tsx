import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Layout from './Layout';

jest.mock('../header/Header', () => ({
  __esModule: true,
  default: () => <div>Mocked Header</div>,
}));

describe('Layout', () => {
  it('renders children content correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders Header component correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
  });

  it('renders Layout structure correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
