import React, { useState } from "react";
import styles from "./Ratio.module.css";
import Card from "../shared-component/Card";
import { useEffect } from "react";

const Ratio = ({ data }) => {
  const [percentage, setPercentage] = useState(null);
  useEffect(() => {
    setPercentage(data);
  }, [data]);
  if (data.length === 0) {
    return <p>Loading..</p>;
  }
  return (
    <Card className={styles.ratio}>
      <h2 className={styles["ratio-heading"]}>Ratio Of Recovery</h2>
      <div className={styles["outer-circle"]}>
        <div className={styles.circle}>
          <h1 className={styles.nan}>{percentage}</h1>
        </div>
      </div>

      <h2 className={styles.para}>0.0k Affected | 0.0K Recovered</h2>
    </Card>
  );
};
export default Ratio;
