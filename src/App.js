import React from "react";
import styles from "./App.module.css";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import CovidData from "./components/CovidData/CovidData.jsx";
import RatioTwitterContainer from "./components/Tweeter/RatioTwitterContainer.jsx";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <div id={styles.container}>
        <CovidData />
        <RatioTwitterContainer />
      </div>
    </Fragment>
  );
};

export default App;
