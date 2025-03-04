import { Request, Response } from 'express';

import { getProcessedArticles } from '../services/articleService';
import { TransformedArticleResponse } from '../types/articleTypes';

export const getArticlesController = async (req: Request, res: Response) => {
  try {
    const tagSlug = req.query.tag ? String(req.query.tag) : undefined;
    const articles: TransformedArticleResponse =
      await getProcessedArticles(tagSlug);

    res.json(articles);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching filtered articles',
      error: error instanceof Error ? error.message : error,
    });
  }
};
