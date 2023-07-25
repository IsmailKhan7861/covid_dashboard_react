import styles from "./TopLeft.module.css";
import arrowDown from "../../assets/arrow-red.png";
import arrowUp from "../../assets/arrow-green.png";
import totalCases from "../../assets/img1.png";
import totalRecoverd from "../../assets/img2.png";
import totalActive from "../../assets/img3.png";
import totalDeaths from "../../assets/img4.png";
import { useEffect, useState } from "react";

export let percentage;
const TopLeft = () => {
  const [countData, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let url = "https://disease.sh/v3/covid-19/all";
      setLoading(true);
      let data = await fetch(url);

      let jsonData = await data.json();
      setLoading(false);
      setData({
        totalCasesNumber: jsonData.cases,
        totalRecoveredNumber: jsonData.recovered,
        totalActiveNumber: jsonData.active,
        totalDeathsNumber: jsonData.deaths,
      });
    }

    fetchData();
  }, []);

  const totalCasesCount = countData.totalCasesNumber;
  const totalRecoverdCount = countData.totalRecoveredNumber;
  const totalActiveCount = countData.totalActiveNumber;
  const totalDeathsCount = countData.totalDeathsNumber;
  percentage = Math.floor((totalRecoverdCount / totalCasesCount) * 100) + "%";
  return (
    <div id={styles["live-data"]}>
      <div className={styles.box}>
        <div>
          <div className={styles.cases}>
            <p>Total Cases{percentage}</p>
            <img src={arrowDown} alt="arrow Down" />
          </div>
          {isLoading && <p className={styles.loader}>Loading...</p>}
          <h3>{totalCasesCount}</h3>
        </div>
        <img src={totalCases} alt="Total Cases" />
      </div>

      <div className={styles.box}>
        <div>
          <div className={styles.cases}>
            <p>Recovered</p>
            <img src={arrowUp} alt="arrow Up" />
          </div>
          {isLoading && <p className={styles.loader}>Loading...</p>}
          <h3>{totalRecoverdCount}</h3>
        </div>
        <img src={totalRecoverd} alt="Total Recovered" />
      </div>

      <div className={styles.box}>
        <div>
          <div className={styles.cases}>
            <p>Active Cases</p>
            <img src={arrowDown} alt="arrow Down" />
          </div>
          {isLoading && <p className={styles.loader}>Loading...</p>}
          <h3>{totalActiveCount}</h3>
        </div>
        <img src={totalActive} alt="Total Cases" />
      </div>

      <div className={styles.box}>
        <div>
          <div className={styles.cases}>
            <p>Total Deaths</p>
            <img src={arrowDown} alt="arrow Down" />
          </div>
          {isLoading && <p className={styles.loader}>Loading...</p>}
          <h3>{totalDeathsCount}</h3>
        </div>
        <img src={totalDeaths} alt="Total Cases" />
      </div>
    </div>
  );
};

export default TopLeft;
