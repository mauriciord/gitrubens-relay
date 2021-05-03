import React from 'react';
import { useFragment } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { List } from 'antd';
import { BuildTwoTone, StarTwoTone } from '@ant-design/icons';

import { Repository_repository$key } from './__generated__/Repository_repository.graphql';
import IconText from '../../shared/common/IconText';

// @ts-ignore
const Repository = ({ repository }) => {
  const repo = useFragment<Repository_repository$key>(
    graphql`
      fragment Repository_repository on Repository {
        id
        name
        descriptionHTML
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        updatedAt
      }
    `,
    repository
  );
  const repoName = repo?.name;
  const starsCount = repo?.stargazers?.totalCount;
  const forksCount = repo?.forks?.totalCount;

  return (
    <List.Item
      key={`search-list-repo`}
      actions={[
        <IconText
          icon={StarTwoTone}
          text={starsCount}
          key="list-vertical-star-o"
        />,
        <IconText
          icon={BuildTwoTone}
          text={forksCount}
          key="list-vertical-star-o"
        />,
      ]}
    >
      <List.Item.Meta title={repoName} />
    </List.Item>
  );
};

export default Repository;
