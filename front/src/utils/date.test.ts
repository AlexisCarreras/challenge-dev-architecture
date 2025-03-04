import { formatDate } from './date';

describe('formatDate', () => {
  it('should correctly format the date in "dd de month de yyyy" format', () => {
    const date = '2023-08-05T10:00:00Z';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('5 de agosto de 2023');
  });
});
