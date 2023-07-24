import React from "react";
import styles from "./RightContainer.module.css";
import Ratio from "./Ratio";
import Twitter from "./Twitter";
const RightContainer = () => {
  return (
    <div id={styles.right}>
      <Ratio />
      <Twitter />
    </div>
  );
};

export default RightContainer;
