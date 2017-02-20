import * as redditsActions from './reddits';

describe('reddits actions', () => {
  it('should create an action to fetch reddits', () => {
    const action: FSA = redditsActions.fetchReddits();
    expect(action.type).toEqual(redditsActions.FETCH_REDDITS);
  });
});
