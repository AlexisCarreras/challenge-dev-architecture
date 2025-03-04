import axios from 'axios';

import { ArticleResponse } from '@/types';

import { fetchArticles } from './articleService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchArticles', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debe obtener artículos correctamente sin tagSlug', async () => {
    const mockResponse: ArticleResponse = {
      articles: [
        {
          id: '1',
          headline: 'Test Article',
          displayDate: '2024-03-04',
          imageUrl: 'https://example.com/image.jpg',
          subtitle: 'This is a test article',
          tags: [{ text: 'React', slug: 'react' }],
        },
      ],
      topTags: [{ text: 'React', slug: 'react' }],
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const result = await fetchArticles();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/articles`
    );
    expect(result).toEqual(mockResponse);
  });

  it('debe obtener artículos correctamente con un tagSlug', async () => {
    const tagSlug = 'react';
    const mockResponse: ArticleResponse = {
      articles: [
        {
          id: '2',
          headline: 'React Article',
          displayDate: '2024-03-04',
          imageUrl: 'https://example.com/react.jpg',
          subtitle: 'An article about React',
          tags: [{ text: 'React', slug: 'react' }],
        },
      ],
      topTags: [{ text: 'React', slug: 'react' }],
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const result = await fetchArticles(tagSlug);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/articles?tag=react`
    );
    expect(result).toEqual(mockResponse);
  });

  it('debe manejar errores y devolver una respuesta vacía', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const result = await fetchArticles();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toEqual({ articles: [], topTags: [] });
  });
});
