import React from 'react';

import { Article } from '@/types';
import { formatDate } from '@/utils/date';

import styles from './ArticleCard.module.css';

export const ArticleCard = React.memo(({ article }: { article: Article }) => {
  const imageUrl = article.imageUrl ?? 'https://placehold.jp/300x200.png';

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={`Imagen de ${article.headline}`}
          width={300}
          height={200}
          className={styles.image}
          loading="lazy"
          fetchPriority="low"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{article.headline}</h2>
        <h5 className={styles.subtitle}>{article.subtitle}</h5>
        <p className={styles.date}>{formatDate(article.displayDate)}</p>
      </div>
    </div>
  );
});
