import axios from 'axios';
import { getFilteredArticles } from '../src/services/articleService';
import { mockArticles } from 'bff/mock/articleMocks';

jest.mock('axios');

describe('getFilteredArticles', () => {
  it('should return filtered articles with subtype 7', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: { articles: mockArticles } });

    const result = await getFilteredArticles();

    expect(result).toEqual([
      {
        _id: 'ZNJ67CCHJNAEBE6IUETWOXMNFM',
        display_date: '2019-12-06T17:50:17.735Z',
        headlines: { basic: 'Arroz con Leche' },
        promo_items: {
          basic: {
            resized_urls: [
              { option: { media: '(min-width: 64em)' }, resizedUrl: 'http://demo.com/image1.jpg' },
              { option: { media: '(min-width: 48em)' }, resizedUrl: 'http://demo.com/image2.jpg' },
            ],
            subtitle: 'Gentileza: Malcriado-Entre fuegos y vinos',
            type: 'image',
            url: 'http://demo.com/main_image.jpg',
          },
        },
        subtype: '7',
        taxonomy: {
          tags: [{ slug: 'leche-tid47244', text: 'Leche' }],
        },
        website_url: '/recetas/postres/arroz-con-leche-nid29102019-6/',
      },
    ]);
  });

  it('should throw an error if API request fails', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('API request failed'));

    await expect(getFilteredArticles()).rejects.toThrow('Error fetching articles from the API');
  });
});
