import React from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import { Fragment } from "react";
import LeftContainer from "./components/Left/LeftContainer.jsx";
import RightContainer from "./components/Right/RightContainer.jsx";

const App = () => {
  console.log("app");
  return (
    <Fragment>
      <Header></Header>
      <div id={styles.container}>
        <LeftContainer />
        <RightContainer />
      </div>
    </Fragment>
  );
};

export default App;
