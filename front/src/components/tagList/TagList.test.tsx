import { render, screen } from '@testing-library/react';

import { TopTag } from '@/types';

import TagList from './TagList';

const mockTags: TopTag[] = [
  { slug: 'javascript', text: 'JavaScript' },
  { slug: 'reactjs', text: 'ReactJS' },
  { slug: 'typescript', text: 'TypeScript' },
];

describe('TagList', () => {
  it('renders a list of tags', () => {
    render(<TagList tags={mockTags} />);

    mockTags.forEach((tag) => {
      expect(screen.getByText(tag.text)).toBeInTheDocument();
    });
  });

  it('renders links with correct href for each tag', () => {
    render(<TagList tags={mockTags} />);

    mockTags.forEach((tag) => {
      const link = screen.getByText(tag.text).closest('a');
      expect(link).toHaveAttribute(
        'href',
        `/tema/${tag.slug.toLowerCase().replace(/\s+/g, '-')}`
      );
    });
  });

  it('applies correct styles for tags', () => {
    render(<TagList tags={mockTags} />);

    mockTags.forEach((tag) => {
      const tagElement = screen.getByText(tag.text);
      expect(tagElement).toHaveStyle('cursor: pointer');
      expect(tagElement).toHaveStyle('padding: 5px 10px');
      expect(tagElement).toHaveStyle('border: 1px solid #ccc');
      expect(tagElement).toHaveStyle('border-radius: 5px');
    });
  });
});
