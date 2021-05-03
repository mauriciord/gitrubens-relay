import { createModel } from '@rematch/core';
import { RootModel } from '../rootModel';
import { Dispatch } from '../store';
import githubAPI from '../../services/github';

import { ProfileProps } from './types';

export type ProfileState = ProfileProps | null;

export const profile = createModel<RootModel>()({
  state: {
    login: undefined,
    id: undefined,
    node_id: undefined,
    avatar_url: undefined,
    gravatar_id: undefined,
    url: undefined,
    html_url: undefined,
    followers_url: undefined,
    following_url: undefined,
    gists_url: undefined,
    starred_url: undefined,
    subscriptions_url: undefined,
    organizations_url: undefined,
    repos_url: undefined,
    events_url: undefined,
    received_events_url: undefined,
    type: undefined,
    site_admin: undefined,
    name: undefined,
    company: undefined,
    blog: undefined,
    location: undefined,
    email: undefined,
    hireable: undefined,
    bio: undefined,
    public_repos: undefined,
    public_gists: undefined,
    followers: undefined,
    following: undefined,
    created_at: undefined,
    updated_at: undefined,
  } as ProfileState,
  reducers: {
    setProfileDetail(state, payload: ProfileState) {
      return payload;
    },
    cleanProfile() {
      return {
        login: undefined,
        id: undefined,
        node_id: undefined,
        avatar_url: undefined,
        gravatar_id: undefined,
        url: undefined,
        html_url: undefined,
        followers_url: undefined,
        following_url: undefined,
        gists_url: undefined,
        starred_url: undefined,
        subscriptions_url: undefined,
        organizations_url: undefined,
        repos_url: undefined,
        events_url: undefined,
        received_events_url: undefined,
        type: undefined,
        site_admin: undefined,
        name: undefined,
        company: undefined,
        blog: undefined,
        location: undefined,
        email: undefined,
        hireable: undefined,
        bio: undefined,
        public_repos: undefined,
        public_gists: undefined,
        followers: undefined,
        following: undefined,
        created_at: undefined,
        updated_at: undefined,
      };
    },
  },
  effects: (dispatch) => ({
    async fetchProfileInfoByUsername(username: string) {
      const { data: response } = await githubAPI.users.getProfileInfoByUsername(
        username
      );
      dispatch.profile.setProfileDetail(response);
    },
    async cleanProfileAsync() {
      dispatch.profile.cleanProfile();
      dispatch.repos.cleanRepos();
    },
  }),
});
