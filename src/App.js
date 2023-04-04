import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ItemDetail from "./components/ItemDetail";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
  );
};

export default App;
