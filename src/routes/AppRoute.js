import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Characters from "../Pages/Characters/Characters";
import Character from "../Pages/Character/Character";
import Houses from "../Pages/Houses/Houses";
import Home from "../Pages/Home/Home";

function AppRoute(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/houses" element={<Houses />} />
      <Route path="/character" element={<Character />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default AppRoute;
