import React from "react";
import styles from "./MiddleLeft.module.css";

const MiddleLeft = () => {
  return (
    <div id={styles["home-country"]}>
      <div id={styles["country-states"]}>
        <table id={styles.table1}>
          <tr id={styles["tr-1"]}>
            <th id={styles.countries}>Country</th>
            <th id={styles["total-cases"]}>Total Cases</th>
            <th id={styles["total-active"]}>Active Cases</th>
            <th id={styles["total-recovered"]}>Toal Recovered</th>
            <th id={styles["total-deaths"]}>Toal Deaths</th>
          </tr>
        </table>
      </div>

      <div id={styles["affected-areas"]}>
        <div className={styles["affected-heading"]}>
          <h1>COVID-19 Affected Areas</h1>

          <div className={styles["type-affected"]}>
            <div id={styles["most-affected"]}></div>
            <h3>Most Affected</h3>
          </div>

          <div className={styles["type-affected"]}>
            <div id={styles["less-affected"]}></div>
            <h3>Less Affected</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleLeft;
