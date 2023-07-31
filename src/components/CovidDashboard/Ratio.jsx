import React, { useState } from "react";
import styles from "./Ratio.module.css";
import Card from "../shared-component/Card";
import { useSelector } from "react-redux";

const Ratio = () => {
  const showData = useSelector((state) => state.world);

  return (
    <Card className={styles.ratio}>
      <h2 className={styles["ratio-heading"]}>Ratio Of Recovery</h2>
      <div className={styles["outer-circle"]}>
        <div className={styles.circle}>
          <h1 className={styles.nan}>
            {showData.isLoading && <p>Calculating...</p>}
            {!showData.isLoading &&
              Math.floor(
                (showData.worldData[1].data / showData.worldData[0].data) * 100
              ) + "%"}
          </h1>
        </div>
      </div>

      <h2 className={styles.para}>0.0k Affected | 0.0K Recovered</h2>
    </Card>
  );
};
export default Ratio;
// Math.floor((countWorldData.recovered / countWorldData.cases) * 100) + "%";
