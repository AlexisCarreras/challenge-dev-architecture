import axios from 'axios';

import { fetchArticles } from '../src/repositories/articlesRepository';
import { Article, FetchArticlesResponse } from '../src/types/articleTypes';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchArticles', () => {
  const mockArticles: Article[] = [
    {
      _id: '1',
      display_date: '2024-03-01T12:00:00Z',
      headlines: { basic: 'Article 1' },
      promo_items: {
        basic: {
          resized_urls: [
            {
              option: { media: 'image' },
              resizedUrl: 'https://image.url/1.jpg',
            },
          ],
          subtitle: 'Image 1',
          type: 'image',
          url: 'https://image.url/1.jpg',
        },
      },
      subtype: 'news',
      taxonomy: {
        tags: [{ slug: 'politics', text: 'Politics' }],
      },
      website_url: '/article-1',
    },
  ];

  it('should return an array of articles when API call is successful', async () => {
    const mockResponse: FetchArticlesResponse = { articles: mockArticles };
    mockedAxios.get.mockResolvedValue({ data: mockResponse });

    const result = await fetchArticles();

    expect(result).toEqual(mockArticles);
    expect(axios.get).toHaveBeenCalledWith(expect.any(String));
  });

  it('should return an empty array if response does not contain articles', async () => {
    mockedAxios.get.mockResolvedValue({ data: {} });

    const result = await fetchArticles();
    expect(result).toEqual([]);
  });

  it('should throw an error if an error occurs during the API call', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchArticles()).rejects.toThrow('Error fetching articles');
  });
});
