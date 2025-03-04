import { TopTag } from '@/types';

interface TagListProps {
  tags: TopTag[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag.slug}>{tag.text}</span>
      ))}
    </div>
  );
};

export default TagList;
