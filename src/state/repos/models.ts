import { normalize } from 'normalizr';

import { Dispatch } from '../store';
import githubAPI from '../../services/github';
import * as schema from './schema';

import { RepoList } from './types';
import { FindParams } from '../../services/github/repos';

type State = {
  entities: {
    repos: RepoList;
  };
  result: number[];
};

export const repos = {
  state: {
    entities: { repos: {} },
    result: [],
  } as State,
  reducers: {
    addRepos(state: State, payload: State) {
      const {
        entities: { repos },
        result,
      } = payload;

      return {
        ...state,
        entities: { repos: { ...state.entities.repos, ...repos } },
        result: [...state.result, ...result],
      };
    },
    cleanRepos(state: State) {
      return {
        ...state,
        entities: { repos: {} },
        result: [],
      };
    },
    setSortedReposIds(state: State, payload: number[]) {
      return {
        ...state,
        result: payload,
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async searchReposByUser({
      user,
      page,
      ...rest
    }: FindParams): Promise<void> {
      const { data: response } = await githubAPI.repos.findReposFromUser({
        user,
        page,
      });

      dispatch.repos.addRepos(normalize(response, schema.arrayOfRepos));
    },
  }),
};
