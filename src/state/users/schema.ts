import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const arrayOfUsers = new schema.Array(user);
