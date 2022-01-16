/**
 * @generated SignedSource<<8161d7a2fa924af53fe9e45f0002b127>>
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ff8e97010d03b2b64103c0b8e0046239",
    "id": null,
    "metadata": {},
    "name": "seekerLinkedInProfileGetMutation",
    "operationKind": "mutation",
    "text": "mutation seekerLinkedInProfileGetMutation(\n  $url: String!\n) {\n  getLinkedin(input: {url: $url}) {\n    profile {\n      name\n      imgSrc\n      currentLocation\n      email\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f232760e38ebb45d903170fbc95a16c4";

export default node;
