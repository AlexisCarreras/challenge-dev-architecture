import { processTags } from '../src/utils/articlesUtils';
import { Article } from '../src/types/articleTypes';

describe('processTags', () => {
  const articles: Article[] = [
    {
      _id: '1',
      subtype: '7',
      display_date: '',
      headlines: { basic: 'Article 1' },
      website_url: '',
      taxonomy: {
        tags: [
          { slug: 'tech', text: 'Tech' },
          { slug: 'news', text: 'News' },
        ],
      },
    },
    {
      _id: '2',
      subtype: '7',
      display_date: '',
      headlines: { basic: 'Article 2' },
      website_url: '',
      taxonomy: {
        tags: [
          { slug: 'tech', text: 'Tech' },
          { slug: 'science', text: 'Science' },
        ],
      },
    },
    {
      _id: '3',
      subtype: '7',
      display_date: '',
      headlines: { basic: 'Article 3' },
      website_url: '',
      taxonomy: {
        tags: [
          { slug: 'news', text: 'News' },
          { slug: 'world', text: 'World' },
        ],
      },
    },
  ];

  it('should count tags correctly', () => {
    const result = processTags(articles);
    expect(result).toEqual(
      expect.arrayContaining([
        { text: 'Tech', slug: 'tech' },
        { text: 'News', slug: 'news' },
      ]),
    );
  });

  it('should return only the top 10 most used tags', () => {
    const largeArticles = Array.from({ length: 50 }, (_, i) => ({
      _id: `${i + 1}`,
      subtype: '7',
      display_date: '',
      headlines: { basic: `Article ${i + 1}` },
      website_url: '',
      taxonomy: { tags: [{ slug: `tag${i}`, text: `Tag ${i}` }] },
    }));

    const result = processTags(largeArticles);
    expect(result.length).toBe(10);
  });

  it('should handle articles without tags correctly', () => {
    const articlesWithoutTags = articles.map((article) => ({ ...article, taxonomy: {} }));
    const result = processTags(articlesWithoutTags);
    expect(result).toEqual([]);
  });

  it('should handle an empty array without errors', () => {
    const result = processTags([]);
    expect(result).toEqual([]);
  });
});
