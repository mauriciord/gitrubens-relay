import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Descriptions, Card, Divider, PageHeader } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

import { Dispatch, iRootState } from '../../state/store';
import { ProfileProps } from '../../state/profile/types';
import { Cover, Wrapper } from '../../shared/common/styles';
import RepositoryList from '../repos/RepositoryList';
import { ProfileState } from '../../state/profile/models';

type Params = {
  slug: string;
};

const { Meta } = Card;

const Profile = () => {
  const dispatch = useDispatch<Dispatch>();
  const profileMainInfo = useSelector((state: iRootState) => state.profile);
  const { slug } = useParams<Params>();
  const profilePublicRepos = profileMainInfo?.public_repos;

  // LOAD MORE
  // TODO: Extract to a useLoadMore hooks
  const lastPageOfRepos = useMemo(() => {
    if (profilePublicRepos) {
      return Math.ceil(profilePublicRepos / 30);
    }

    return undefined;
  }, [profilePublicRepos]);

  const history = useHistory();
  const location = useLocation();
  // @ts-ignore
  const { from } = location.state || { from: { pathname: '/' } };

  const handleOnBackHeader = useCallback(() => {
    history.replace(from);
    dispatch.profile.cleanProfileAsync();
  }, [history, dispatch.profile, from]);

  useEffect(() => {
    dispatch.profile.fetchProfileInfoByUsername(slug);

    return () => {
      dispatch.profile.cleanProfileAsync();
    };
  }, [dispatch.profile, slug]);

  if (!profileMainInfo) {
    return null;
  }

  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    name,
    public_repos,
    public_gists,
  } = profileMainInfo;

  return (
    <Cover>
      <Wrapper>
        <>
          <PageHeader onBack={handleOnBackHeader} title="Back" />
          {!!avatar_url && (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="avatar" src={avatar_url} />}
            >
              <Meta title={name} description={bio} />
            </Card>
          )}
          <Divider orientation="left">User Info</Divider>
          <Descriptions bordered size="small">
            <Descriptions.Item label="Company">{company}</Descriptions.Item>
            <Descriptions.Item label="Followers">{followers}</Descriptions.Item>
            <Descriptions.Item label="Public Repos">
              {public_repos}
            </Descriptions.Item>
            <Descriptions.Item label="Public Gists">
              {public_gists}
            </Descriptions.Item>
            <Descriptions.Item label="Following">{following}</Descriptions.Item>
            <Descriptions.Item label="Location">{location}</Descriptions.Item>
            <Descriptions.Item label="Blog">{blog}</Descriptions.Item>
          </Descriptions>
          <Divider orientation="left">Repos</Divider>
          <RepositoryList username={slug} lastPageOfRepos={lastPageOfRepos} />
        </>
      </Wrapper>
    </Cover>
  );
};

export default Profile;
