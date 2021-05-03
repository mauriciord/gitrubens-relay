import React, { useCallback, useEffect, useState } from 'react';
import { Button, List, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RepoListActions, RepoListHeader, FilterLabel } from './styles';
import { Dispatch, iRootState } from '../../state/store';
import { Repository, RepoList } from '../../state/repos/types';
import { useFormik } from 'formik';
import { sortArray } from '../../shared/helpers';

type RepositoryListProps = {
  lastPageOfRepos?: number;
  username: string;
};

const { Option } = Select;

const RepositoryList = ({ lastPageOfRepos, username }: RepositoryListProps) => {
  const dispatch = useDispatch<Dispatch>();
  const repoListIds = useSelector((state: iRootState) => state.repos.result);
  const repoList: RepoList = useSelector(
    // @ts-ignore
    (state: iRootState) => state.repos?.entities?.repos || []
  );
  const [reposCurrentPage, setReposCurrentPage] = useState(1);
  const formik = useFormik({
    initialValues: {
      filter: 'desc',
    },
    onSubmit: ({ filter }) => {
      dispatch.repos.setSortedReposIds(sortArray(repoListIds, filter));
    },
  });

  const loadMore = repoListIds.length > 0 &&
    lastPageOfRepos &&
    reposCurrentPage < lastPageOfRepos && (
      <RepoListActions>
        <Button
          onClick={() => {
            const nextPage = reposCurrentPage + 1;
            setReposCurrentPage(nextPage);
            dispatch.repos.searchReposByUser({
              user: username,
              page: nextPage,
            });
          }}
        >
          load more
        </Button>
      </RepoListActions>
    );

  useEffect(() => {
    dispatch.repos.searchReposByUser({
      user: username,
      order: formik.values.filter,
    });
    // @ts-ignore
  }, [dispatch.repos, username, formik.values.filter]);

  const handleFormFilterChange = useCallback(
    (value: string) => {
      formik.setFieldValue('filter', value);
      formik.handleSubmit();
    },
    [formik]
  );

  return (
    <List
      size="small"
      header={
        <RepoListHeader>
          <FilterLabel>Order by:</FilterLabel>
          <form onSubmit={formik.handleSubmit}>
            <Select
              defaultValue={formik.initialValues.filter}
              style={{ width: 100 }}
              onChange={handleFormFilterChange}
            >
              <Option value="asc">ASC</Option>
              <Option value="desc">DESC</Option>
            </Select>
          </form>
        </RepoListHeader>
      }
      bordered
      dataSource={repoListIds}
      loadMore={loadMore}
      renderItem={(repoId: number) => {
        const repository: Repository = repoList[repoId];

        return (
          <List.Item
            actions={[
              repository.homepage && (
                <a
                  href={repository.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Homepage
                </a>
              ),
            ]}
          >
            <List.Item.Meta
              title={repository.name}
              description={repository.html_url}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default RepositoryList;
