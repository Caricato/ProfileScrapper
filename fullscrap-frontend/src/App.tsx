import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { LazyResults, LazySeeker } from "./pages/lazy";

function App(props: any) {
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
