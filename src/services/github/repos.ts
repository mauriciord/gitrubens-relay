import api from './api';

export type FindParams = {
  user: string;
  page?: number;
  per_page?: number;
  order?: string;
  sort?: string;
};

export const findReposFromUser = ({
  user,
  page = 1,
  per_page = 30,
  order = 'desc',
  sort = 'updated_at',
}: FindParams) =>
  api.get(`/users/${user}/repos`, {
    params: {
      ...(page && { page }),
      ...(per_page && { per_page }),
      ...(order && { order }),
      ...(sort && { sort }),
    },
  });
