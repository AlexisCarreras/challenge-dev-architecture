import { Request, Response } from 'express';

import { getFilteredArticles } from '../services/articleService';

export const getArticlesController = async (req: Request, res: Response) => {
  try {
    const articles = await getFilteredArticles();

    res.json(articles);
  } catch (error) {
    console.error('Error in getArticlesController:', error);
    res.status(500).json({
      message: 'Error fetching filtered articles',
      error: error instanceof Error ? error.message : error,
    });
  }
};
