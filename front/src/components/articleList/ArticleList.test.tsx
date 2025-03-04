import { render, screen } from '@testing-library/react';

import { Article } from '@/types';

import ArticleList from './ArticleList';

jest.mock('../articleCard/ArticleCard', () => ({
  ArticleCard: ({ article }: { article: Article }) => (
    <div>{article.headline}</div>
  ),
}));

const mockArticles: Article[] = [
  {
    id: '1',
    headline: 'Test Headline 1',
    displayDate: '2023-08-05T10:00:00Z',
    imageUrl: 'http://image1.com',
    subtitle: 'Test Subtitle 1',
    tags: [{ slug: 'tag1', text: 'Tag 1' }],
  },
  {
    id: '2',
    headline: 'Test Headline 2',
    displayDate: '2023-08-06T10:00:00Z',
    imageUrl: 'http://image2.com',
    subtitle: 'Test Subtitle 2',
    tags: [{ slug: 'tag2', text: 'Tag 2' }],
  },
];

describe('ArticleList', () => {
  it('renders the correct number of articles', () => {
    render(<ArticleList articles={mockArticles} />);
    expect(screen.getAllByText(/Test Headline/)).toHaveLength(
      mockArticles.length
    );
  });

  it('displays the headlines of the articles correctly', () => {
    render(<ArticleList articles={mockArticles} />);
    expect(screen.getByText('Test Headline 1')).toBeInTheDocument();
    expect(screen.getByText('Test Headline 2')).toBeInTheDocument();
  });

  it('shows nothing if no articles are passed', () => {
    render(<ArticleList articles={[]} />);
    expect(screen.queryByText('Test Headline 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Headline 2')).not.toBeInTheDocument();
  });
});
