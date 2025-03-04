import { GetServerSideProps } from 'next';

import ArticlePage from '@/components/articlePage/ArticlePage';
import { fetchArticles } from '@/services/articleService';
import { ArticleResponse } from '@/types';

export default function TagPage(props: ArticleResponse) {
  return <ArticlePage {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const tagSlug = params?.tag as string;

  const data = await fetchArticles(tagSlug);

  return {
    props: data,
    notFound: data.articles.length === 0,
  };
};
