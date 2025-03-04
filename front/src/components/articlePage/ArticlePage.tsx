import dynamic from 'next/dynamic';

import Layout from '@/components/layout/Layout';
import { ArticleResponse } from '@/types';

const ArticleList = dynamic(() => import('../articleList/ArticleList'), {
  loading: () => <div>Loading articles...</div>,
});
const TagList = dynamic(() => import('../tagList/TagList'), {
  loading: () => <div>Loading tags...</div>,
});

const ArticlePage = ({ articles, topTags }: ArticleResponse) => {
  return (
    <Layout>
      <TagList tags={topTags} />
      <ArticleList articles={articles} />
    </Layout>
  );
};

export default ArticlePage;
