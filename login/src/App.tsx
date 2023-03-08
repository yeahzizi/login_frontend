import React from "react";
import "./App.css";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <section className="h-full w-full flex flex-wrap">
        <Router />
      </section>
    </div>
  );
}

export default App;
