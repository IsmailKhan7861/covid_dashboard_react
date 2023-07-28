import React from "react";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import CovidDashboard from "./components/CovidDashboard/CovidDashboard";
const App = () => {
  return (
    <Fragment>
      <Header />
      <CovidDashboard />
    </Fragment>
  );
};

export default App;
