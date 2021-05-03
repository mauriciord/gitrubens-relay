import { Models } from '@rematch/core';
import { users } from './users/models';
import { repos } from './repos/models';
import { searchHistory } from './searchHistory/models';
import { profile } from './profile/models';

export interface RootModel extends Models<RootModel> {
  users: typeof users;
  repos: typeof repos;
  searchHistory: typeof searchHistory;
  profile: typeof profile;
}

export const models: RootModel = {
  users,
  repos,
  searchHistory,
  profile,
};
