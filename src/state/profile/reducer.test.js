import { profile } from './models';

describe('state/profile/reducer', () => {
  const initialState = profile.state;

  it('should setProfileDetail()', () => {
    const payload = {
      login: 'mauriciord',
      id: 1128701,
      node_id: 'MDQ6VXNlcjExMjg3MDE=',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1128701?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mauriciord',
      html_url: 'https://github.com/mauriciord',
      followers_url: 'https://api.github.com/users/mauriciord/followers',
      following_url:
        'https://api.github.com/users/mauriciord/following{/other_user}',
      gists_url: 'https://api.github.com/users/mauriciord/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mauriciord/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/mauriciord/subscriptions',
      organizations_url: 'https://api.github.com/users/mauriciord/orgs',
      repos_url: 'https://api.github.com/users/mauriciord/repos',
      events_url: 'https://api.github.com/users/mauriciord/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mauriciord/received_events',
      type: 'User',
      site_admin: false,
      name: 'Maurício R Duarte',
      company: null,
      blog: 'https://atalkwith.dev',
      location: 'Ribeirão Preto, SP - Brasil',
      email: null,
      hireable: true,
      bio: null,
      public_repos: 60,
      public_gists: 18,
      followers: 70,
      following: 181,
      created_at: '2011-10-14T17:18:29Z',
      updated_at: '2020-04-28T14:29:35Z',
    };
    const result = profile.reducers.setProfileDetail(initialState, payload);

    expect(result).toEqual({
      login: 'mauriciord',
      id: 1128701,
      node_id: 'MDQ6VXNlcjExMjg3MDE=',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1128701?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mauriciord',
      html_url: 'https://github.com/mauriciord',
      followers_url: 'https://api.github.com/users/mauriciord/followers',
      following_url:
        'https://api.github.com/users/mauriciord/following{/other_user}',
      gists_url: 'https://api.github.com/users/mauriciord/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mauriciord/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/mauriciord/subscriptions',
      organizations_url: 'https://api.github.com/users/mauriciord/orgs',
      repos_url: 'https://api.github.com/users/mauriciord/repos',
      events_url: 'https://api.github.com/users/mauriciord/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mauriciord/received_events',
      type: 'User',
      site_admin: false,
      name: 'Maurício R Duarte',
      company: null,
      blog: 'https://atalkwith.dev',
      location: 'Ribeirão Preto, SP - Brasil',
      email: null,
      hireable: true,
      bio: null,
      public_repos: 60,
      public_gists: 18,
      followers: 70,
      following: 181,
      created_at: '2011-10-14T17:18:29Z',
      updated_at: '2020-04-28T14:29:35Z',
    });
  });
  it('should cleanProfile()', () => {
    const before = {
      login: 'mauriciord',
      id: 1128701,
      node_id: 'MDQ6VXNlcjExMjg3MDE=',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1128701?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mauriciord',
      html_url: 'https://github.com/mauriciord',
      followers_url: 'https://api.github.com/users/mauriciord/followers',
      following_url:
        'https://api.github.com/users/mauriciord/following{/other_user}',
      gists_url: 'https://api.github.com/users/mauriciord/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mauriciord/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/mauriciord/subscriptions',
      organizations_url: 'https://api.github.com/users/mauriciord/orgs',
      repos_url: 'https://api.github.com/users/mauriciord/repos',
      events_url: 'https://api.github.com/users/mauriciord/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mauriciord/received_events',
      type: 'User',
      site_admin: false,
      name: 'Maurício R Duarte',
      company: null,
      blog: 'https://atalkwith.dev',
      location: 'Ribeirão Preto, SP - Brasil',
      email: null,
      hireable: true,
      bio: null,
      public_repos: 60,
      public_gists: 18,
      followers: 70,
      following: 181,
      created_at: '2011-10-14T17:18:29Z',
      updated_at: '2020-04-28T14:29:35Z',
    };
    const result = profile.reducers.cleanProfile();

    expect(result).toEqual({
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
    });
  });
});
