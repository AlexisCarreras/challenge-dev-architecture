import React from 'react';
import Image from 'next/image';
import { Article } from '@/types';

export const ArticleCard = React.memo(({ article }: { article: Article }) => {
  return (
    <div>
      <Image
        src={article.imageUrl ?? 'https://placehold.jp/300x200.png'}
        alt={article.headline}
        width={300}
        height={200}
        priority={false}
      />
      <h2>{article.headline}</h2>
      <h5>{article.subtitle}</h5>
      <p>{article.displayDate}</p>
    </div>
  );
});
