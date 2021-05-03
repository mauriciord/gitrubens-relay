import api from './api';

type FindParams = {
  query: string;
  page?: number;
  per_page?: number;
  order?: string;
  sort?: string;
};

export const findUser = ({ query, page, per_page, order, sort }: FindParams) =>
  api.get('/search/users', {
    params: {
      q: query,
      ...(page && { page }),
      ...(per_page && { per_page }),
      ...(order && { order }),
      ...(sort && { sort }),
    },
  });

export const getProfileInfoByUsername = (username: string) =>
  api.get(`/users/${username}`);
