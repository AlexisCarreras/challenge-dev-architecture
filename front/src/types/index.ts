export interface TopTag {
  text: string;
  slug: string;
}

export interface Article {
  id: string;
  headline: string;
  displayDate: string;
  imageUrl?: string;
  subtitle?: string;
  tags: string[];
  websiteUrl: string;
}

export type ArticleResponse = {
  articles: Article[];
  topTags: TopTag[];
};
