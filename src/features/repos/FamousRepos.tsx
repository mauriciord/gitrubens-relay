import React from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { List } from 'antd';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { Cover, PageTitle, Wrapper } from '../../shared/common/styles';
import Logo from '../../shared/common/Logo';
import { FamousReposQuery } from './__generated__/FamousReposQuery.graphql';
import Repository from './Repository';

const FamousRepos = () => {
  const response = useLazyLoadQuery<FamousReposQuery>(
    graphql`
      query FamousReposQuery {
        search(
          query: "react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc"
          type: REPOSITORY
          first: 5
        ) {
          repositoryCount
          edges {
            node {
              ...Repository_repository
            }
          }
        }
      }
    `,
    { first: 5 },
    {
      fetchPolicy: 'network-only',
    }
  );

  const { search } = response;

  return (
    <Cover>
      <Wrapper>
        <Logo />
        <PageTitle>List of repositories</PageTitle>
        <List
          itemLayout="horizontal"
          // @ts-ignore
          dataSource={search.edges}
          bordered
          // @ts-ignore
          renderItem={({ node }) => {
            return <Repository repository={node} />;
          }}
        />
      </Wrapper>
    </Cover>
  );
};

export default FamousRepos;
