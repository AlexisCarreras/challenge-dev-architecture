import { filterArticles } from '../src/utils/articlesUtils';
import { Article } from '../src/types/articleTypes';

describe('filterArticles', () => {
  const articles: Article[] = [
    {
      _id: '1',
      subtype: '7',
      display_date: '',
      headlines: { basic: 'Article 1' },
      website_url: '',
    },
    {
      _id: '2',
      subtype: '7',
      display_date: '',
      headlines: { basic: 'Article 2' },
      website_url: '',
    },
    {
      _id: '3',
      subtype: '8',
      display_date: '',
      headlines: { basic: 'Article 3' },
      website_url: '',
    },
    {
      _id: '4',
      subtype: '7',
      display_date: '',
      headlines: { basic: 'Article 4' },
      website_url: '',
    },
  ];

  it('should filter only articles with subtype "7"', () => {
    const filtered = filterArticles(articles);
    expect(filtered.every((article) => article.subtype === '7')).toBe(true);
  });

  it('should limit the output to a maximum of 30 articles', () => {
    const largeArticles = Array.from({ length: 50 }, (_, i) => ({
      _id: `${i + 1}`,
      subtype: '7',
      display_date: '',
      headlines: { basic: `Article ${i + 1}` },
      website_url: '',
    }));

    const filtered = filterArticles(largeArticles);
    expect(filtered.length).toBe(30);
  });

  it('should return an empty array if no articles have subtype "7"', () => {
    const noValidArticles = articles.map((article) => ({ ...article, subtype: '8' }));
    const filtered = filterArticles(noValidArticles);
    expect(filtered).toEqual([]);
  });

  it('should handle an empty array without errors', () => {
    const filtered = filterArticles([]);
    expect(filtered).toEqual([]);
  });
});
