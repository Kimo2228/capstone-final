import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={["app"]}>
          <header className={["app__header"]}>
            <NavigationBar />
          </header>

          <main className={["app__main"]}>
            <AppRoute />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
