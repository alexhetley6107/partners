import compose from 'compose-function';
import { RouterProvider } from './RouterProvider';
import { StoreProvider } from './StoreProvider';

export const withProviders = compose(RouterProvider, StoreProvider);
