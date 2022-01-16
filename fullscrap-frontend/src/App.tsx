import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRootLinkedInProfileGetMutation } from "./app-root";
import "./App.scss";
import { LazyResults, LazySeeker } from "./pages/lazy";

function App(props: any) {
  // const {
  //   getLinkedin: { profile },
  // } = usePreloadedQuery(
  //   AppRootLinkedInProfileGetMutation,
  //   props.preloadedQuery
  // );

  // <h1>Hola {profile.name} </h1>
  //     <img src={profile.imgSrc} />
  //     <p>Tu correo es: {profile.email}</p>
  //     <p>Tu ubicación es: {profile.currentLocation}</p>

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LazySeeker />} />
        <Route path="result" element={<LazyResults />} />
      </Routes>
    </div>
  );
}

export default App;
