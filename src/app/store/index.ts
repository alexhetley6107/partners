import { combineSlices, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineSlices();

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const store = makeStore();

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export default store;
