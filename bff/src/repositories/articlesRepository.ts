import axios from 'axios';

import { Article, FetchArticlesResponse } from '../types/articleTypes';

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get<FetchArticlesResponse>(
      process.env.API_URL || ''
    );
    return response.data.articles || [];
  } catch (error) {
    throw new Error(`Error fetching articles: ${error}`);
  }
};
