import { Article, TransformedArticle } from '../src/types/articleTypes';
import { transformArticles } from '../src/utils/transformData';

describe('transformArticles', () => {
  const sampleArticle: Article = {
    _id: '123',
    display_date: '2024-03-01T12:00:00Z',
    headlines: { basic: 'Sample Headline' },
    promo_items: {
      basic: {
        resized_urls: [],
        subtitle: 'Sample Subtitle',
        type: 'image',
        url: 'http://example.com/sample.jpg',
      },
    },
    subtype: '7',
    taxonomy: { tags: [{ slug: 'sample-tag', text: 'Sample Tag' }] },
    website_url: '/sample-url',
  };

  it('should transform correctly an article to expected format', () => {
    const transformed = transformArticles([sampleArticle]);

    const expected: TransformedArticle = {
      id: '123',
      headline: 'Sample Headline',
      displayDate: '2024-03-01T12:00:00Z',
      imageUrl: 'http://example.com/sample.jpg',
      subtitle: 'Sample Subtitle',
      tags: [{ slug: 'sample-tag', text: 'Sample Tag' }],
    };

    expect(transformed).toEqual([expected]);
  });

  it('should handle articles without promo_items (no image, no subtitle)', () => {
    const articleWithoutPromo: Article = {
      ...sampleArticle,
      promo_items: undefined,
    };

    const transformed = transformArticles([articleWithoutPromo]);

    expect(transformed[0].imageUrl).toBeUndefined();
    expect(transformed[0].subtitle).toBeUndefined();
  });

  it('should handle articles without taxonomy (no tags)', () => {
    const articleWithoutTags: Article = {
      ...sampleArticle,
      taxonomy: undefined,
    };

    const transformed = transformArticles([articleWithoutTags]);

    expect(transformed[0].tags).toEqual([]);
  });

  it('should return an empty array if input is an empty array', () => {
    const transformed = transformArticles([]);

    expect(transformed).toEqual([]);
  });
});
