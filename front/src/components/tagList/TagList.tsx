import Link from 'next/link';

import { TopTag } from '@/types';

interface TagListProps {
  tags: TopTag[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {tags.map((tag) => (
        <Link
          key={tag.slug}
          href={`/tema/${tag.slug.toLowerCase().replace(/\s+/g, '-')}`}
          passHref
        >
          <span
            style={{
              cursor: 'pointer',
              padding: '5px 10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            {tag.text}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default TagList;
