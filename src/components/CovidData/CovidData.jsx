import React from "react";
import styles from "./CovidData.module.css";
import WorldData from "./WorldData";
import TableData from "./TableData";
import GraphNewsContainer from "./GraphNewsContainer";
const CovidData = () => {
  return (
    <div id={styles.left}>
      <WorldData />
      <TableData />
      <GraphNewsContainer />
    </div>
  );
};

export default CovidData;
