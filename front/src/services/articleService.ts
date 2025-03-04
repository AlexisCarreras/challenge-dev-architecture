import axios from 'axios';

import { ArticleResponse } from '@/types';

export const fetchArticles = async (
  tagSlug?: string
): Promise<ArticleResponse> => {
  try {
    const url = tagSlug
      ? `${process.env.API_URL}/api/articles?tag=${tagSlug}`
      : `${process.env.API_URL}/api/articles`;
    const res = await axios.get(url);
    return res.data;
  } catch {
    return {
      articles: [],
      topTags: [],
    };
  }
};
