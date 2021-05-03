import { repos } from './models';

describe('state/repos/reducer', () => {
  const initialState = repos.state;

  it('should addRepos()', () => {
    const payload = {
      entities: {
        repos: {
          '122700681': {
            id: 122700681,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMjI3MDA2ODE=',
            name: 'test-todo-rn',
            full_name: 'mauriciord/test-todo-rn',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/test-todo-rn',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/test-todo-rn',
            forks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/deployments',
            created_at: '2018-02-24T03:47:12Z',
            updated_at: '2018-02-24T03:48:03Z',
            pushed_at: '2018-02-24T11:43:04Z',
            git_url: 'git://github.com/mauriciord/test-todo-rn.git',
            ssh_url: 'git@github.com:mauriciord/test-todo-rn.git',
            clone_url: 'https://github.com/mauriciord/test-todo-rn.git',
            svn_url: 'https://github.com/mauriciord/test-todo-rn',
            homepage: null,
            size: 65,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
          '144634731': {
            id: 144634731,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNDQ2MzQ3MzE=',
            name: 'mock-server',
            full_name: 'mauriciord/mock-server',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/mock-server',
            description: 'A JSON server for mock',
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/mock-server',
            forks_url:
              'https://api.github.com/repos/mauriciord/mock-server/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/mock-server/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/mock-server/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/mock-server/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/mock-server/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/mock-server/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/mock-server/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/mock-server/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/mock-server/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/mock-server/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/mock-server/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/mock-server/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/mock-server/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/mock-server/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/mock-server/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/mock-server/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/mock-server/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/mock-server/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/mock-server/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/mock-server/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/mock-server/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/mock-server/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/mock-server/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/mock-server/deployments',
            created_at: '2018-08-13T21:16:55Z',
            updated_at: '2018-08-14T14:30:28Z',
            pushed_at: '2018-08-14T14:30:27Z',
            git_url: 'git://github.com/mauriciord/mock-server.git',
            ssh_url: 'git@github.com:mauriciord/mock-server.git',
            clone_url: 'https://github.com/mauriciord/mock-server.git',
            svn_url: 'https://github.com/mauriciord/mock-server',
            homepage: null,
            size: 23,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
      },
      result: [122700681, 144634731],
    };
    const result = repos.reducers.addRepos(initialState, payload);

    expect(result).toEqual({
      entities: {
        repos: {
          '122700681': {
            id: 122700681,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMjI3MDA2ODE=',
            name: 'test-todo-rn',
            full_name: 'mauriciord/test-todo-rn',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/test-todo-rn',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/test-todo-rn',
            forks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/deployments',
            created_at: '2018-02-24T03:47:12Z',
            updated_at: '2018-02-24T03:48:03Z',
            pushed_at: '2018-02-24T11:43:04Z',
            git_url: 'git://github.com/mauriciord/test-todo-rn.git',
            ssh_url: 'git@github.com:mauriciord/test-todo-rn.git',
            clone_url: 'https://github.com/mauriciord/test-todo-rn.git',
            svn_url: 'https://github.com/mauriciord/test-todo-rn',
            homepage: null,
            size: 65,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
          '144634731': {
            id: 144634731,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNDQ2MzQ3MzE=',
            name: 'mock-server',
            full_name: 'mauriciord/mock-server',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/mock-server',
            description: 'A JSON server for mock',
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/mock-server',
            forks_url:
              'https://api.github.com/repos/mauriciord/mock-server/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/mock-server/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/mock-server/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/mock-server/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/mock-server/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/mock-server/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/mock-server/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/mock-server/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/mock-server/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/mock-server/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/mock-server/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/mock-server/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/mock-server/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/mock-server/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/mock-server/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/mock-server/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/mock-server/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/mock-server/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/mock-server/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/mock-server/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/mock-server/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/mock-server/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/mock-server/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/mock-server/deployments',
            created_at: '2018-08-13T21:16:55Z',
            updated_at: '2018-08-14T14:30:28Z',
            pushed_at: '2018-08-14T14:30:27Z',
            git_url: 'git://github.com/mauriciord/mock-server.git',
            ssh_url: 'git@github.com:mauriciord/mock-server.git',
            clone_url: 'https://github.com/mauriciord/mock-server.git',
            svn_url: 'https://github.com/mauriciord/mock-server',
            homepage: null,
            size: 23,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
      },
      result: [122700681, 144634731],
    });
  });
  it('should cleanRepos()', () => {
    const before = {
      entities: {
        repos: {
          '122700681': {
            id: 122700681,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMjI3MDA2ODE=',
            name: 'test-todo-rn',
            full_name: 'mauriciord/test-todo-rn',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/test-todo-rn',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/test-todo-rn',
            forks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/deployments',
            created_at: '2018-02-24T03:47:12Z',
            updated_at: '2018-02-24T03:48:03Z',
            pushed_at: '2018-02-24T11:43:04Z',
            git_url: 'git://github.com/mauriciord/test-todo-rn.git',
            ssh_url: 'git@github.com:mauriciord/test-todo-rn.git',
            clone_url: 'https://github.com/mauriciord/test-todo-rn.git',
            svn_url: 'https://github.com/mauriciord/test-todo-rn',
            homepage: null,
            size: 65,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
          '144634731': {
            id: 144634731,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNDQ2MzQ3MzE=',
            name: 'mock-server',
            full_name: 'mauriciord/mock-server',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/mock-server',
            description: 'A JSON server for mock',
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/mock-server',
            forks_url:
              'https://api.github.com/repos/mauriciord/mock-server/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/mock-server/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/mock-server/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/mock-server/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/mock-server/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/mock-server/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/mock-server/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/mock-server/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/mock-server/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/mock-server/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/mock-server/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/mock-server/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/mock-server/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/mock-server/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/mock-server/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/mock-server/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/mock-server/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/mock-server/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/mock-server/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/mock-server/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/mock-server/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/mock-server/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/mock-server/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/mock-server/deployments',
            created_at: '2018-08-13T21:16:55Z',
            updated_at: '2018-08-14T14:30:28Z',
            pushed_at: '2018-08-14T14:30:27Z',
            git_url: 'git://github.com/mauriciord/mock-server.git',
            ssh_url: 'git@github.com:mauriciord/mock-server.git',
            clone_url: 'https://github.com/mauriciord/mock-server.git',
            svn_url: 'https://github.com/mauriciord/mock-server',
            homepage: null,
            size: 23,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
      },
      result: [122700681, 144634731],
    };
    const result = repos.reducers.cleanRepos();

    expect(result).toEqual(initialState);
  });
  it('should setSortedReposIds()', () => {
    const before = {
      entities: {
        repos: {
          '122700681': {
            id: 122700681,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMjI3MDA2ODE=',
            name: 'test-todo-rn',
            full_name: 'mauriciord/test-todo-rn',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/test-todo-rn',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/test-todo-rn',
            forks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/test-todo-rn/deployments',
            created_at: '2018-02-24T03:47:12Z',
            updated_at: '2018-02-24T03:48:03Z',
            pushed_at: '2018-02-24T11:43:04Z',
            git_url: 'git://github.com/mauriciord/test-todo-rn.git',
            ssh_url: 'git@github.com:mauriciord/test-todo-rn.git',
            clone_url: 'https://github.com/mauriciord/test-todo-rn.git',
            svn_url: 'https://github.com/mauriciord/test-todo-rn',
            homepage: null,
            size: 65,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
          '144634731': {
            id: 144634731,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNDQ2MzQ3MzE=',
            name: 'mock-server',
            full_name: 'mauriciord/mock-server',
            private: false,
            owner: {
              login: 'mauriciord',
              id: 1128701,
              node_id: 'MDQ6VXNlcjExMjg3MDE=',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1128701?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mauriciord',
              html_url: 'https://github.com/mauriciord',
              followers_url:
                'https://api.github.com/users/mauriciord/followers',
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
            },
            html_url: 'https://github.com/mauriciord/mock-server',
            description: 'A JSON server for mock',
            fork: false,
            url: 'https://api.github.com/repos/mauriciord/mock-server',
            forks_url:
              'https://api.github.com/repos/mauriciord/mock-server/forks',
            keys_url:
              'https://api.github.com/repos/mauriciord/mock-server/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mauriciord/mock-server/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mauriciord/mock-server/teams',
            hooks_url:
              'https://api.github.com/repos/mauriciord/mock-server/hooks',
            issue_events_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mauriciord/mock-server/events',
            assignees_url:
              'https://api.github.com/repos/mauriciord/mock-server/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mauriciord/mock-server/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/tags',
            blobs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mauriciord/mock-server/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mauriciord/mock-server/languages',
            stargazers_url:
              'https://api.github.com/repos/mauriciord/mock-server/stargazers',
            contributors_url:
              'https://api.github.com/repos/mauriciord/mock-server/contributors',
            subscribers_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscribers',
            subscription_url:
              'https://api.github.com/repos/mauriciord/mock-server/subscription',
            commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mauriciord/mock-server/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mauriciord/mock-server/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mauriciord/mock-server/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mauriciord/mock-server/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mauriciord/mock-server/merges',
            archive_url:
              'https://api.github.com/repos/mauriciord/mock-server/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mauriciord/mock-server/downloads',
            issues_url:
              'https://api.github.com/repos/mauriciord/mock-server/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mauriciord/mock-server/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mauriciord/mock-server/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mauriciord/mock-server/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mauriciord/mock-server/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mauriciord/mock-server/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mauriciord/mock-server/deployments',
            created_at: '2018-08-13T21:16:55Z',
            updated_at: '2018-08-14T14:30:28Z',
            pushed_at: '2018-08-14T14:30:27Z',
            git_url: 'git://github.com/mauriciord/mock-server.git',
            ssh_url: 'git@github.com:mauriciord/mock-server.git',
            clone_url: 'https://github.com/mauriciord/mock-server.git',
            svn_url: 'https://github.com/mauriciord/mock-server',
            homepage: null,
            size: 23,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
      },
      result: [122700681, 144634731],
    };
    const result = repos.reducers.setSortedReposIds(before, [
      144634731,
      122700681,
    ]);

    expect(result).toEqual({ ...before, result: [144634731, 122700681] });
  });
});
