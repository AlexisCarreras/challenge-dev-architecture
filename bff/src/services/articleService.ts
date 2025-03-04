import { fetchArticles } from '../repositories/articlesRepository';
import { Article, TransformedArticleResponse } from '../types/articleTypes';
import { filterArticles, processTags } from '../utils/articlesUtils';
import { transformArticles } from '../utils/transformData';

export const getProcessedArticles = async (): Promise<TransformedArticleResponse> => {
  try {
    const articles: Article[] = await fetchArticles();
    const filteredArticles = filterArticles(articles);
    const topTags = processTags(filteredArticles);

    return {
      articles: transformArticles(filteredArticles),
      topTags,
    };
  } catch (error) {
    throw new Error('Error processing articles');
  }
};
