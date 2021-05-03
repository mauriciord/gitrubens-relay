import { createModel } from '@rematch/core';
import { RootModel } from '../rootModel';
import { SearchQuery } from './types';

type State = SearchQuery[];

export const searchHistory = createModel<RootModel>()({
  state: [] as State,
  reducers: {
    addQuery(state: State, payload: string) {
      if (!state.includes(payload)) {
        return [...state, payload];
      }

      return state;
    },
  },
});
