import { Article, TransformedArticle } from '../types/articleTypes';

export const transformArticles = (articles: Article[]): TransformedArticle[] => {
  return articles.map((article) => ({
    id: article._id,
    headline: article.headlines.basic,
    displayDate: article.display_date,
    imageUrl: article.promo_items?.basic?.url,
    subtitle: article.promo_items?.basic?.subtitle,
    tags: article.taxonomy?.tags?.map((tag) => tag.text) || [],
    websiteUrl: article.website_url,
  }));
};
