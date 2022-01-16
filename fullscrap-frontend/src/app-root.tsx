// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RelayEnvironment from "./relay/RelayEnvironment";
const { Suspense } = React;

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <BrowserRouter>
        <Suspense fallback={"Loading..."}>
          <App />
        </Suspense>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
