import { normalize } from 'normalizr';
import { createModel } from '@rematch/core';

import { RootModel } from '../rootModel';
import githubAPI from '../../services/github';
import * as schema from './schema';

import { User } from './types';

type State = {
  entities: {
    users: User[];
  };
  result: number[];
};

export const users = createModel<RootModel>()({
  state: {
    entities: { users: [] },
    result: [],
  } as State,
  reducers: {
    addUsers(state, payload: State) {
      const {
        entities: { users },
        result,
      } = payload;

      return {
        entities: { users },
        result,
      };
    },
  },
  effects: (dispatch) => ({
    async searchUserByQuery(query: string) {
      const { data } = await githubAPI.users.findUser({ query });
      const response = data.items.map((item: any) => ({ ...item }));

      dispatch.users.addUsers(normalize(response, schema.arrayOfUsers));
      dispatch.searchHistory.addQuery(query);
    },
  }),
});
