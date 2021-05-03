import { users } from './models';

describe('state/repos/reducer', () => {
  const initialState = users.state;

  it('should addUsers()', () => {
    const payload = {
      entities: {
        users: {
          1128701: {
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
            gists_url:
              'https://api.github.com/users/mauriciord/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mauriciord/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mauriciord/subscriptions',
            organizations_url: 'https://api.github.com/users/mauriciord/orgs',
            repos_url: 'https://api.github.com/users/mauriciord/repos',
            events_url:
              'https://api.github.com/users/mauriciord/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mauriciord/received_events',
            type: 'User',
            site_admin: false,
            score: 1,
          },
          6386085: {
            login: 'mauriciord506',
            id: 6386085,
            node_id: 'MDQ6VXNlcjYzODYwODU=',
            avatar_url: 'https://avatars1.githubusercontent.com/u/6386085?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mauriciord506',
            html_url: 'https://github.com/mauriciord506',
            followers_url:
              'https://api.github.com/users/mauriciord506/followers',
            following_url:
              'https://api.github.com/users/mauriciord506/following{/other_user}',
            gists_url:
              'https://api.github.com/users/mauriciord506/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mauriciord506/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mauriciord506/subscriptions',
            organizations_url:
              'https://api.github.com/users/mauriciord506/orgs',
            repos_url: 'https://api.github.com/users/mauriciord506/repos',
            events_url:
              'https://api.github.com/users/mauriciord506/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mauriciord506/received_events',
            type: 'User',
            site_admin: false,
            score: 1,
          },
        },
      },
      result: [1128701, 6386085],
    };
    const result = users.reducers.addUsers(initialState, payload);

    expect(result).toEqual({
      entities: {
        users: {
          1128701: {
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
            gists_url:
              'https://api.github.com/users/mauriciord/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mauriciord/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mauriciord/subscriptions',
            organizations_url: 'https://api.github.com/users/mauriciord/orgs',
            repos_url: 'https://api.github.com/users/mauriciord/repos',
            events_url:
              'https://api.github.com/users/mauriciord/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mauriciord/received_events',
            type: 'User',
            site_admin: false,
            score: 1,
          },
          6386085: {
            login: 'mauriciord506',
            id: 6386085,
            node_id: 'MDQ6VXNlcjYzODYwODU=',
            avatar_url: 'https://avatars1.githubusercontent.com/u/6386085?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mauriciord506',
            html_url: 'https://github.com/mauriciord506',
            followers_url:
              'https://api.github.com/users/mauriciord506/followers',
            following_url:
              'https://api.github.com/users/mauriciord506/following{/other_user}',
            gists_url:
              'https://api.github.com/users/mauriciord506/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mauriciord506/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mauriciord506/subscriptions',
            organizations_url:
              'https://api.github.com/users/mauriciord506/orgs',
            repos_url: 'https://api.github.com/users/mauriciord506/repos',
            events_url:
              'https://api.github.com/users/mauriciord506/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mauriciord506/received_events',
            type: 'User',
            site_admin: false,
            score: 1,
          },
        },
      },
      result: [1128701, 6386085],
    });
  });
});
