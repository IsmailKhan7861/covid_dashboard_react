import React from "react";
import styles from "./LeftContainer.module.css";
import TopLeft from "./TopLeft";
import MiddleLeft from "./MiddleLeft";

const LeftContainer = () => {
  console.log("leftcontsiner");
  return (
    <div id={styles.left}>
      <TopLeft />
      <MiddleLeft />
    </div>
  );
};

export default LeftContainer;
