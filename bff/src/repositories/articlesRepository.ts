import axios from 'axios';
import { Article, FetchArticlesResponse } from '../types/articleTypes';

const ENDPOINT_URL = 'https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/';

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get<FetchArticlesResponse>(ENDPOINT_URL);
    return response.data.articles || [];
  } catch (error) {
    throw new Error('Error fetching articles');
  }
};
