import React from "react";
import styles from "./LeftContainer.module.css";
import TopLeft from "./TopLeft";
import MiddleLeft from "./MiddleLeft";
import BottomLeft from "./BottomLeft";
const LeftContainer = () => {
  console.log("leftcontsiner");
  return (
    <div id={styles.left}>
      <TopLeft />
      <MiddleLeft />
      <BottomLeft />
    </div>
  );
};

export default LeftContainer;
