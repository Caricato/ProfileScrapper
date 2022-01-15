import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import { AppRootLinkedInProfileGetMutation } from "./app-root";
import "./App.scss";

function App(props: any) {
  const {
    getLinkedin: { profile },
  } = usePreloadedQuery(
    AppRootLinkedInProfileGetMutation,
    props.preloadedQuery
  );

  return (
    <div className="App">
      <h1>Hola {profile.name} </h1>
      <img src={profile.imgSrc} />
      <p>Tu correo es: {profile.email}</p>
      <p>Tu ubicación es: {profile.currentLocation}</p>
    </div>
  );
}

export default App;
