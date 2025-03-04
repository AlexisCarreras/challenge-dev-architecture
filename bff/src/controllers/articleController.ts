import { Request, Response } from 'express';

import { getProcessedArticles } from '../services/articleService';
import { TransformedArticleResponse } from '../types/articleTypes';

export const getArticlesController = async (req: Request, res: Response) => {
  try {
    const articles: TransformedArticleResponse  = await getProcessedArticles();

    res.json(articles);
  } catch (error) {
    console.error('Error in getArticlesController:', error);
    res.status(500).json({
      message: 'Error fetching filtered articles',
      error: error instanceof Error ? error.message : error,
    });
  }
};
