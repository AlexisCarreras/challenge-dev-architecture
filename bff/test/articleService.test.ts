import { fetchArticles } from '../src/repositories/articlesRepository';
import { getProcessedArticles } from '../src/services/articleService';
import { Article, TransformedArticleResponse } from '../src/types/articleTypes';
import { filterArticles, processTags } from '../src/utils/articlesUtils';
import { transformArticles } from '../src/utils/transformData';

jest.mock('../src/repositories/articlesRepository');
jest.mock('../src/utils/articlesUtils');
jest.mock('../src/utils/transformData');

describe('getProcessedArticles', () => {
  const mockArticles: Article[] = [
    {
      _id: '1',
      display_date: '2023-08-05T10:00:00Z',
      headlines: { basic: 'Test Headline' },
      promo_items: {
        basic: {
          resized_urls: [{ option: { media: 'image' }, resizedUrl: 'http://image.com' }],
          subtitle: 'Test Subtitle',
          type: 'image',
          url: 'http://image.com',
        },
      },
      subtype: 'test',
      taxonomy: { tags: [{ slug: 'tag-1', text: 'Tag 1' }] },
      website_url: 'http://example.com',
    },
  ];

  const transformedArticles = [
    {
      id: '1',
      headline: 'Test Headline',
      displayDate: '2023-08-05T10:00:00Z',
      imageUrl: 'http://image.com',
      subtitle: 'Test Subtitle',
      tags: ['Tag 1'],
      websiteUrl: 'http://example.com',
    },
  ];

  const topTags = [{ text: 'Tag 1', slug: 'tag-1' }];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return transformed articles and top tags', async () => {
    (fetchArticles as jest.Mock).mockResolvedValue(mockArticles);
    (filterArticles as jest.Mock).mockReturnValue(mockArticles);
    (processTags as jest.Mock).mockReturnValue(topTags);
    (transformArticles as jest.Mock).mockReturnValue(transformedArticles);

    const result: TransformedArticleResponse = await getProcessedArticles();

    expect(result).toEqual({ articles: transformedArticles, topTags });
    expect(fetchArticles).toHaveBeenCalledTimes(1);
    expect(filterArticles).toHaveBeenCalledWith(mockArticles);
    expect(processTags).toHaveBeenCalledWith(mockArticles);
    expect(transformArticles).toHaveBeenCalledWith(mockArticles);
  });

  it('should throw an error if fetchArticles fails', async () => {
    (fetchArticles as jest.Mock).mockRejectedValue(new Error('Fetch error'));

    await expect(getProcessedArticles()).rejects.toThrow('Error processing articles');
  });
});
