import { searchHistory } from './models';

describe('state/searchHistory/reducer', () => {
  const initialState = searchHistory.state;

  it('should addQuery() without queries', () => {
    const before = initialState;
    const result = searchHistory.reducers.addQuery(before, 'coffee');

    expect(result).toEqual([...before, 'coffee']);
  });

  it('should addQuery() with an existing word', () => {
    const before = ['coffee'];
    const result = searchHistory.reducers.addQuery(before, 'coffee');

    expect(result).toEqual(['coffee']);
  });

  it('should addQuery() with a non-empty list', () => {
    const before = ['mauriciord', 'sibelius', 'pauloedurezende'];
    const result = searchHistory.reducers.addQuery(before, 'coffee');

    expect(result).toEqual([
      'mauriciord',
      'sibelius',
      'pauloedurezende',
      'coffee',
    ]);
  });
});
