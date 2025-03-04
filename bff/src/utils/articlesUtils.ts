import { Article, TopTag } from '../types/articleTypes';

export const filterArticles = (articles: Article[]): Article[] => {
  return articles.filter((article) => article.subtype === '7').slice(0, 30);
};

export const filterByTag = (
  articles: Article[],
  tagSlug?: string
): Article[] => {
  if (!tagSlug) return articles;

  return articles.filter(
    (article) =>
      Array.isArray(article.taxonomy?.tags) &&
      article.taxonomy.tags.some((tag) => tag.slug === tagSlug)
  );
};

export const processTags = (articles: Article[]): TopTag[] => {
  const tagCount: Record<string, { text: string; count: number }> = {};

  articles.forEach((article) => {
    article.taxonomy?.tags?.forEach((tag) => {
      if (tagCount[tag.slug]) {
        tagCount[tag.slug].count += 1;
      } else {
        tagCount[tag.slug] = { text: tag.text, count: 1 };
      }
    });
  });
  return Object.entries(tagCount)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10)
    .map(([slug, { text }]) => ({ text, slug }));
};
