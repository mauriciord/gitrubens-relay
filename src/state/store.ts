import { init, RematchRootState, RematchDispatch } from '@rematch/core';
// rematch plugins
import selectPlugin, { ExtractSelectorsFromModel } from '@rematch/select';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';

import { models, RootModel } from './rootModel';

type FullModel = ExtractSelectorsFromModel<RootModel>;

// const persistPlugin = createRematchPersist({
//   whitelist: ['users', 'searchHistory'],
//   throttle: 5000,
//   version: 2,
// });

const persistConfig = {
  key: 'root',
  storage,
};

export const store = init<RootModel, FullModel>({
  models,
  plugins: [selectPlugin(), persistPlugin(persistConfig)],
});

export const { select } = store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
