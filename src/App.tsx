import React, { useState, useEffect } from "react";
import { Card } from "./components/card";
import { Test } from "./components/test";
import { Header } from "./components/header";

const App: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-200 ">
        <Header />
        <Card />
      </div>
    </>
  );
};

export default App;
