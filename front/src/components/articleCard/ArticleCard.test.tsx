import { render, screen } from '@testing-library/react';

import { Article } from '@/types';

import { ArticleCard } from './ArticleCard';

const mockArticle: Article = {
  id: '1',
  headline: 'Test Headline',
  displayDate: '2023-08-05T10:00:00Z',
  imageUrl: 'http://image.com',
  subtitle: 'Test Subtitle',
  tags: [{ slug: 'sample-tag', text: 'Sample Tag' }],
};

describe('ArticleCard', () => {
  it('renders article details correctly', () => {
    render(<ArticleCard article={mockArticle} />);

    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('5 de agosto de 2023')).toBeInTheDocument();

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', 'http://image.com');
    expect(imgElement).toHaveAttribute('alt', 'Imagen de Test Headline');
  });

  it('renders a placeholder image if imageUrl is not provided', () => {
    const articleWithoutImage = { ...mockArticle, imageUrl: undefined };
    render(<ArticleCard article={articleWithoutImage} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute(
      'src',
      'https://placehold.jp/300x200.png'
    );
    expect(imgElement).toHaveAttribute('alt', 'Imagen de Test Headline');
  });
});
