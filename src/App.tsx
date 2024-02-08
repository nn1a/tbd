import React from "react";
import Dashboard from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Dashboard>
        <MainPage></MainPage>
      </Dashboard>
    </BrowserRouter>
  );
}

export default App;
