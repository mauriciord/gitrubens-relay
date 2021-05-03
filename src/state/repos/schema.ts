import { schema } from 'normalizr';

export const repo = new schema.Entity('repos');
export const arrayOfRepos = new schema.Array(repo);
