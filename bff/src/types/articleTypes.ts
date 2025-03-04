interface Tag {
  slug: string;
  text: string;
}

interface Taxonomy {
  tags?: Tag[];
}

export interface Article {
  _id: string;
  display_date: string;
  headlines: {
    basic: string;
  };
  promo_items?: {
    basic?: {
      resized_urls?: {
        option: { media: string };
        resizedUrl: string;
      }[];
      subtitle?: string;
      type: string;
      url: string;
    };
  };
  subtype: string;
  taxonomy?: Taxonomy;
  website_url: string;
}

export interface FetchArticlesResponse {
  articles: Article[];
}

export interface TopTag {
  text: string;
  slug: string;
}

export interface TransformedArticle {
  id: string;
  headline: string;
  displayDate: string;
  imageUrl?: string;
  subtitle?: string;
  tags: Tag[];
}

export interface TransformedArticleResponse {
  articles: TransformedArticle[];
  topTags: TopTag[];
}
