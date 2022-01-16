/**
 * @generated SignedSource<<618723bbffdad18a3b8c5371d2acfaaf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type resultsLinkedInProfileGetMutation$variables = {
  url: string;
};
export type resultsLinkedInProfileGetMutationVariables = resultsLinkedInProfileGetMutation$variables;
export type resultsLinkedInProfileGetMutation$data = {
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
export type resultsLinkedInProfileGetMutationResponse = resultsLinkedInProfileGetMutation$data;
export type resultsLinkedInProfileGetMutation = {
  variables: resultsLinkedInProfileGetMutationVariables;
  response: resultsLinkedInProfileGetMutation$data;
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
    "name": "resultsLinkedInProfileGetMutation",
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
    "name": "resultsLinkedInProfileGetMutation",
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
    "cacheID": "931fa79ee3ed3930c705c48ff27d842f",
    "id": null,
    "metadata": {},
    "name": "resultsLinkedInProfileGetMutation",
    "operationKind": "mutation",
    "text": "mutation resultsLinkedInProfileGetMutation(\n  $url: String!\n) {\n  getLinkedin(input: {url: $url}) {\n    profile {\n      name\n      imgSrc\n      currentLocation\n      email\n      id\n    }\n    skills {\n      name\n      id\n    }\n    education {\n      degree\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3933e14d593f79a61287a73c4938e853";

export default node;
