import { render, screen } from '@testing-library/react';

import { Article } from '@/types';

import TagList from './TagList';

// Mockear los estilos de CSS Modules
jest.mock('./TagList.module.css', () => ({
  tagList: 'tagList',
  tag: 'tag',
  selected: 'selected',
}));

const mockArticle: Article = {
  id: '1',
  headline: 'Test Headline',
  displayDate: '2023-08-05T10:00:00Z',
  imageUrl: 'http://image.com',
  subtitle: 'Test Subtitle',
  tags: [
    { slug: 'javascript', text: 'JavaScript' },
    { slug: 'reactjs', text: 'ReactJS' },
    { slug: 'typescript', text: 'TypeScript' },
  ],
};

describe('TagList', () => {
  it('renders a list of tags correctly', () => {
    render(<TagList tags={mockArticle.tags} />);

    // Verificamos que cada tag se renderiza correctamente
    mockArticle.tags.forEach((tag) => {
      expect(screen.getByText(tag.text)).toBeInTheDocument();
    });
  });

  it('applies the selected class to the selected tag', () => {
    render(<TagList tags={mockArticle.tags} selectedTag="reactjs" />);

    // Verificamos que la clase "selected" se aplica correctamente al tag seleccionado
    const selectedTag = screen.getByText('ReactJS');
    expect(selectedTag).toHaveClass('selected');
  });
});
