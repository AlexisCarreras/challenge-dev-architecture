import dynamic from 'next/dynamic';
import styles from './ArticlePage.module.css';

import Layout from '@/components/layout/Layout';
import { ArticleResponse } from '@/types';

const ArticleList = dynamic(() => import('../articleList/ArticleList'), {
  loading: () => <div>Loading articles...</div>,
});
const TagList = dynamic(() => import('../tagList/TagList'), {
  loading: () => <div>Loading tags...</div>,
});

interface ArticlePageProps extends ArticleResponse {
  selectedTag?: string;
}

const ArticlePage = ({ articles, topTags, selectedTag }: ArticlePageProps) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.tagList}>
          <TagList tags={topTags} selectedTag={selectedTag} />
        </div>
        <ArticleList articles={articles} />
      </div>
    </Layout>
  );
};

export default ArticlePage;
