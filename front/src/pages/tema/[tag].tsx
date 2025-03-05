import { GetServerSideProps } from 'next';

import ArticlePage from '@/components/articlePage/ArticlePage';
import { fetchArticles } from '@/services/articleService';
import { ArticleResponse } from '@/types';

interface TagPageProps extends ArticleResponse {
  selectedTag: string;
}

export default function TagPage(props: TagPageProps) {
  return <ArticlePage {...props} />;
}

export const getServerSideProps: GetServerSideProps<TagPageProps> = async ({ params }) => {
  const tagSlug = params?.tag as string;

  const data = await fetchArticles(tagSlug);

  return {
    props: {
      ...data,
      selectedTag: tagSlug,
    },
    notFound: data.articles.length === 0,
  };
};
