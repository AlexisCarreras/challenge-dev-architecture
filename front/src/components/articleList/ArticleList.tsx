import { Article } from '@/types';
import styles from './ArticleList.module.css';

import { ArticleCard } from '../articleCard/ArticleCard';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
