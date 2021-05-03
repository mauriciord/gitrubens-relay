/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Repository_repository = {
    readonly id: string;
    readonly name: string;
    readonly descriptionHTML: unknown;
    readonly stargazers: {
        readonly totalCount: number;
    };
    readonly forks: {
        readonly totalCount: number;
    };
    readonly updatedAt: unknown;
    readonly " $refType": "Repository_repository";
};
export type Repository_repository$data = Repository_repository;
export type Repository_repository$key = {
    readonly " $data"?: Repository_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"Repository_repository">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repository_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "forks",
      "plural": false,
      "selections": (v0/*: any*/),
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
};
})();
(node as any).hash = '6a91cb5640fbe680c2725704c6fb9d2b';
export default node;
