// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { loadQuery } from "react-relay/hooks";
import App from "./App";
import RelayEnvironment from "./relay/RelayEnvironment";
const { Suspense } = React;

// Define a query
export const AppRootLinkedInProfileGetMutation = graphql`
  mutation appRootLinkedInProfileGetMutation($url: String!) {
    getLinkedin(input: { url: $url }) {
      profile {
        name
        imgSrc
        currentLocation
        email
      }
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(
  RelayEnvironment,
  AppRootLinkedInProfileGetMutation,
  {
    url: "https://www.linkedin.com/in/rodrigodulanto/",
  }
);

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
