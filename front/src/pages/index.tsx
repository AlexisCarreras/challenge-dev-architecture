import { GetServerSideProps } from 'next';

import ArticlePage from '@/components/articlePage/ArticlePage';
import { fetchArticles } from '@/services/articleService';
import { ArticleResponse } from '@/types';

export default function Home(props: ArticleResponse) {
  return <ArticlePage {...props} selectedTag={undefined} />;
}

export const getServerSideProps: GetServerSideProps<
  ArticleResponse
> = async () => {
  const data = await fetchArticles();
  return {
    props: data,
    notFound: data.articles.length === 0,
  };
};
