import { fetchArticles } from '../repositories/articlesRepository';
import { Article, TransformedArticleResponse } from '../types/articleTypes';
import {
  filterArticles,
  filterByTag,
  processTags,
} from '../utils/articlesUtils';
import { transformArticles } from '../utils/transformData';

export const getProcessedArticles = async (
  tagSlug?: string
): Promise<TransformedArticleResponse> => {
  try {
    const articles: Article[] = await fetchArticles();
    const filteredArticles = filterArticles(articles);
    const tagFilteredArticles = filterByTag(filteredArticles, tagSlug);

    const topTags = processTags(tagFilteredArticles);

    return {
      articles: transformArticles(tagFilteredArticles),
      topTags,
    };
  } catch (error) {
    throw new Error(`Error processing articles: ${error}`);
  }
};
