import Link from 'next/link';

import { TopTag } from '@/types';

import styles from './TagList.module.css';

interface TagListProps {
  tags: TopTag[];
  selectedTag?: string;
}

const TagList: React.FC<TagListProps> = ({ tags, selectedTag }) => {
  return (
    <div className={styles.tagList}>
      {tags.map((tag) => (
        <Link
          className={`${styles.tag} ${
            selectedTag === tag.slug ? styles.selected : ''
          }`}
          key={tag.slug}
          href={`/tema/${tag.slug.toLowerCase().replace(/\s+/g, '-')}`}
          passHref
        >
          {tag.text}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
