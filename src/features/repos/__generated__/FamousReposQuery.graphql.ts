/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FamousReposQueryVariables = {};
export type FamousReposQueryResponse = {
    readonly search: {
        readonly repositoryCount: number;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"Repository_repository">;
            } | null;
        } | null> | null;
    };
};
export type FamousReposQuery = {
    readonly response: FamousReposQueryResponse;
    readonly variables: FamousReposQueryVariables;
};



/*
query FamousReposQuery {
  search(query: "react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc", type: REPOSITORY, first: 5) {
    repositoryCount
    edges {
      node {
        __typename
        ...Repository_repository
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  },
  {
    "kind": "Literal",
    "name": "query",
    "value": "react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "REPOSITORY"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "repositoryCount",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FamousReposQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Repository_repository"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "search(first:5,query:\"react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc\",type:\"REPOSITORY\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FamousReposQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "descriptionHTML",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StargazerConnection",
                        "kind": "LinkedField",
                        "name": "stargazers",
                        "plural": false,
                        "selections": (v3/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RepositoryConnection",
                        "kind": "LinkedField",
                        "name": "forks",
                        "plural": false,
                        "selections": (v3/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "updatedAt",
                        "storageKey": null
                      }
                    ],
                    "type": "Repository",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "search(first:5,query:\"react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc\",type:\"REPOSITORY\")"
      }
    ]
  },
  "params": {
    "cacheID": "eaa3426b6e2f7504b18e61f068b75ded",
    "id": null,
    "metadata": {},
    "name": "FamousReposQuery",
    "operationKind": "query",
    "text": "query FamousReposQuery {\n  search(query: \"react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc\", type: REPOSITORY, first: 5) {\n    repositoryCount\n    edges {\n      node {\n        __typename\n        ...Repository_repository\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment Repository_repository on Repository {\n  id\n  name\n  descriptionHTML\n  stargazers {\n    totalCount\n  }\n  forks {\n    totalCount\n  }\n  updatedAt\n}\n"
  }
};
})();
(node as any).hash = '64428dd122dd7278e28d0a40035c5850';
export default node;
