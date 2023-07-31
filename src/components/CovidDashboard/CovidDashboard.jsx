import React from "react";
import WorldData from "./WorldData";
import styles from "./CovidDashboard.module.css";
import Ratio from "./Ratio";
import Twitter from "./Twitter";
import News from "./News";
import Map from "./Map";
import CovidTable from "./CovidTable";
import CovidGraph from "./CovidGraph";
import { useEffect, useState } from "react";
import { twitterUrl, twitterOptions } from "./utils";

const CovidDashboard = () => {
  const [countTwitter, setCountTwitter] = useState([]);

  let twitterDataFetch = async () => {
    let twitterData = await fetch(twitterUrl, twitterOptions);
    let twitterJsonData = await twitterData.json();
    setCountTwitter(twitterJsonData);
  };
  useEffect(() => {
    async function fetchData() {
      let twitterData = await twitterDataFetch();
    }
    //FeTCHING
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <WorldData />
        <div className={styles["home-country"]}>
          <CovidTable />
          <Map />
        </div>
        <div className={styles["home-updates"]}>
          <CovidGraph />
          <News />
        </div>
      </div>
      <div className={styles.right}>
        <Ratio />
        <Twitter data={countTwitter} />
      </div>
    </div>
  );
};
export default CovidDashboard;
