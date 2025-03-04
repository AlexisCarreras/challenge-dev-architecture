import Image from 'next/image';
import React from 'react';

import { Article } from '@/types';
import { formatDate } from '@/utils/date';

export const ArticleCard = React.memo(({ article }: { article: Article }) => {
  return (
    <div>
      <Image
        src={article.imageUrl ?? 'https://placehold.jp/300x200.png'}
        alt={`Imagen de ${article.headline}`}
        width={300}
        height={200}
        loading="lazy"
      />
      <h2>{article.headline}</h2>
      <h5>{article.subtitle}</h5>
      <p>{formatDate(article.displayDate)}</p>
    </div>
  );
});
