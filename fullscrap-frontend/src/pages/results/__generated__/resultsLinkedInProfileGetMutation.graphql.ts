/**
 * @generated SignedSource<<12ed482cd8df55e6b9a9a32cbdb0c45a>>
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
      readonly major: string;
      readonly fromYear: string;
      readonly toYear: string;
      readonly university: string;
      readonly universityUrl: string;
      readonly universityImageUrl: string;
    } | null> | null;
    readonly jobs: ReadonlyArray<{
      readonly designation: string;
      readonly company: string;
      readonly companyUrl: string;
      readonly companyImageUrl: string;
      readonly fromMonth: string;
      readonly fromYear: string;
      readonly toMonth: string | null;
      readonly toYear: string | null;
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
  "name": "major",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fromYear",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "toYear",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "university",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "universityUrl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "universityImageUrl",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "designation",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "company",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyUrl",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyImageUrl",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fromMonth",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "toMonth",
  "storageKey": null
},
v19 = {
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
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinJobNode",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": true,
            "selections": [
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v8/*: any*/),
              (v18/*: any*/),
              (v9/*: any*/)
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
              (v19/*: any*/)
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
              (v19/*: any*/)
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
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkedinJobNode",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": true,
            "selections": [
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v8/*: any*/),
              (v18/*: any*/),
              (v9/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "af7e281be5990495f456353c69c8e4e7",
    "id": null,
    "metadata": {},
    "name": "resultsLinkedInProfileGetMutation",
    "operationKind": "mutation",
    "text": "mutation resultsLinkedInProfileGetMutation(\n  $url: String!\n) {\n  getLinkedin(input: {url: $url}) {\n    profile {\n      name\n      imgSrc\n      currentLocation\n      email\n      id\n    }\n    skills {\n      name\n      id\n    }\n    education {\n      degree\n      major\n      fromYear\n      toYear\n      university\n      universityUrl\n      universityImageUrl\n      id\n    }\n    jobs {\n      designation\n      company\n      companyUrl\n      companyImageUrl\n      fromMonth\n      fromYear\n      toMonth\n      toYear\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c205512abbaf8d0cc8e4e8d7204a0860";

export default node;
