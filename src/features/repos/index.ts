import { lazy } from 'react';

export { default as FamousRepos } from './FamousRepos';
export { default as RepositoryList } from './RepositoryList';

// Pages
export const FamousReposPage = lazy(() => import('./FamousReposPage'));
