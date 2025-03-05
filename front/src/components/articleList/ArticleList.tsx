import { motion, AnimatePresence } from 'framer-motion';
import { Article } from '@/types';
import styles from './ArticleList.module.css';

import { ArticleCard } from '../articleCard/ArticleCard';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={styles.articleList}>
      <AnimatePresence>
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.articleCardWrapper}
          >
            <ArticleCard key={article.id} article={article} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ArticleList;
