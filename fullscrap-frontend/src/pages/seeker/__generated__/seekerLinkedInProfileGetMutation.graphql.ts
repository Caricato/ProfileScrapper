/**
 * @generated SignedSource<<35ddc5423b9d9838e20d5c0af77af712>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type seekerLinkedInProfileGetMutation$variables = {
  url: string;
};
export type seekerLinkedInProfileGetMutationVariables = seekerLinkedInProfileGetMutation$variables;
export type seekerLinkedInProfileGetMutation$data = {
  readonly getLinkedin: {
    readonly profile: {
      readonly name: string;
      readonly imgSrc: string;
      readonly currentLocation: string;
      readonly email: string;
    } | null;
    readonly skills: ReadonlyArray<{
      readonly name: string;
    } | null> | null;
    readonly education: ReadonlyArray<{
      readonly degree: string;
    } | null> | null;
  } | null;
};
export type seekerLinkedInProfileGetMutationResponse = seekerLinkedInProfileGetMutation$data;
export type seekerLinkedInProfileGetMutation = {
  variables: seekerLinkedInProfileGetMutationVariables;
  response: seekerLinkedInProfileGetMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "url"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "url",
        "variableName": "url"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imgSrc",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentLocation",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "degree",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "seekerLinkedInProfileGetMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetLinkedinPayload",
        "kind": "LinkedField",
        "name": "getLinkedin",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinProfileNode",
            "kind": "LinkedField",
            "name": "profile",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinSkillNode",
            "kind": "LinkedField",
            "name": "skills",
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinEducationNode",
            "kind": "LinkedField",
            "name": "education",
            "plural": true,
            "selections": [
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "seekerLinkedInProfileGetMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetLinkedinPayload",
        "kind": "LinkedField",
        "name": "getLinkedin",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinProfileNode",
            "kind": "LinkedField",
            "name": "profile",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinSkillNode",
            "kind": "LinkedField",
            "name": "skills",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinEducationNode",
            "kind": "LinkedField",
            "name": "education",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d20c0ae4ffb660a4db92a29c7c1e41ba",
    "id": null,
    "metadata": {},
    "name": "seekerLinkedInProfileGetMutation",
    "operationKind": "mutation",
    "text": "mutation seekerLinkedInProfileGetMutation(\n  $url: String!\n) {\n  getLinkedin(input: {url: $url}) {\n    profile {\n      name\n      imgSrc\n      currentLocation\n      email\n      id\n    }\n    skills {\n      name\n      id\n    }\n    education {\n      degree\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dc2190ba02adbab92abb70817324fab7";

export default node;
