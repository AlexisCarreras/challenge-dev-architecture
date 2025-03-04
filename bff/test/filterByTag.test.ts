import { Article } from '../src/types/articleTypes';
import { filterByTag } from '../src/utils/articlesUtils';

describe('filterByTag', () => {
  const sampleArticles: Article[] = [
    {
      _id: '1',
      display_date: '2024-03-01T12:00:00Z',
      headlines: { basic: 'Article 1' },
      promo_items: {
        basic: {
          resized_urls: [],
          subtitle: 'Subtitle 1',
          type: 'image',
          url: 'http://example.com/image1.jpg',
        },
      },
      taxonomy: { tags: [{ slug: 'tag1', text: 'Tag 1' }] },
      subtype: '7',
      website_url: '/article-1',
    },
    {
      _id: '2',
      display_date: '2024-03-02T12:00:00Z',
      headlines: { basic: 'Article 2' },
      promo_items: {
        basic: {
          resized_urls: [],
          subtitle: 'Subtitle 2',
          type: 'image',
          url: 'http://example.com/image2.jpg',
        },
      },
      taxonomy: { tags: [{ slug: 'tag2', text: 'Tag 2' }] },
      subtype: '7',
      website_url: '/article-2',
    },
    {
      _id: '3',
      display_date: '2024-03-03T12:00:00Z',
      headlines: { basic: 'Article 3' },
      promo_items: {
        basic: {
          resized_urls: [],
          subtitle: 'Subtitle 3',
          type: 'image',
          url: 'http://example.com/image3.jpg',
        },
      },
      taxonomy: { tags: [{ slug: 'tag1', text: 'Tag 1' }] },
      subtype: '7',
      website_url: '/article-3',
    },
  ];

  it('should filter articles by tagSlug', () => {
    const filtered = filterByTag(sampleArticles, 'tag1');

    expect(filtered).toHaveLength(2);
    expect(filtered[0]._id).toBe('1');
    expect(filtered[1]._id).toBe('3');
  });

  it('should return all articles if tagSlug is undefined', () => {
    const filtered = filterByTag(sampleArticles);

    expect(filtered).toHaveLength(3);
  });

  it('should return an empty array if no articles match the tagSlug', () => {
    const filtered = filterByTag(sampleArticles, 'tag3');

    expect(filtered).toHaveLength(0);
  });

  it('should handle articles without taxonomy or tags', () => {
    const articleWithoutTags: Article = {
      _id: '4',
      display_date: '2024-03-04T12:00:00Z',
      headlines: { basic: 'Article 4' },
      promo_items: {
        basic: {
          resized_urls: [],
          subtitle: 'Subtitle 4',
          type: 'image',
          url: 'http://example.com/image4.jpg',
        },
      },
      taxonomy: {},
      subtype: '7',
      website_url: '/article-4',
    };

    const filtered = filterByTag(
      [...sampleArticles, articleWithoutTags],
      'tag1'
    );

    expect(filtered).toHaveLength(2);
    expect(filtered.some((article) => article._id === '4')).toBe(false);
  });

  it('should return an empty array if input is an empty array', () => {
    const filtered = filterByTag([], 'tag1');

    expect(filtered).toEqual([]);
  });
});
