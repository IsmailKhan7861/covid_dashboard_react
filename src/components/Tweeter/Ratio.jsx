import React from "react";
import styles from "./Ratio.module.css";
import { percentage } from "../CovidData/WorldData";

const Ratio = () => {
  return (
    <div id={styles.ratio}>
      <h2 id={styles["ratio-heading"]}>Ratio Of Recovery</h2>
      <div className={styles["outer-circle"]}>
        <div className={styles.circle}>
          <h1 id={styles.nan}>{percentage}</h1>
        </div>
      </div>

      <h2 id={styles.para}>0.0k Affected | 0.0K Recovered</h2>
    </div>
  );
};
export default Ratio;
