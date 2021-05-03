import { lazy } from 'react';

export { default as Profile } from './Profile';
export { default as SearchForm } from './SearchForm';

// Pages
export const UserSearchPage = lazy(() => import('./UserSearchPage'));
export const ProfilePage = lazy(() => import('./ProfilePage'));
