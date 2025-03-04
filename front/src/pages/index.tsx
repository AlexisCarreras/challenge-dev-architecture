import { GetServerSideProps } from 'next';
import axios from 'axios';
import { ArticleResponse } from '@/types';
import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';

const ArticleList = dynamic(() => import('../components/articleList/ArticleList'), {
  loading: () => <div>Loading articles...</div>,
});
const TagList = dynamic(() => import('../components/tagList/TagList'), {
  loading: () => <div>Loading tags...</div>,
});

export default function Home({ articles, topTags }: ArticleResponse) {
  return (
    <Layout>
      <TagList tags={topTags} />
      <ArticleList articles={articles} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ArticleResponse> = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/api/articles`);
    return {
      props: res.data,
    };
  } catch (error) {
    console.error('Error al obtener los artículos:', error);
    return {
      props: {
        articles: [],
        topTags: [],
      },
      notFound: true,
    };
  }
};
