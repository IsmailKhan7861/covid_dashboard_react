import React from "react";
import styles from "./RatioTwitterContainer.module.css";
import Ratio from "./Ratio";
import Twitter from "./Twitter";
const RatioTwitterContainer = () => {
  return (
    <div id={styles.right}>
      <Ratio />
      <Twitter />
    </div>
  );
};

export default RatioTwitterContainer;
