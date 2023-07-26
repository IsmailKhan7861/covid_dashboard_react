import React from "react";
import styles from "./TableData.module.css";
import { useState, useEffect } from "react";

let loadedData = [];
const TableData = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
      let data = await fetch(url);
      let jsonData = await data.json();

      // for (const key in jsonData) {
      //   loadedData.push({
      //     country: jsonData[key].country,
      //     cases: jsonData[key].cases,
      //     active: jsonData[key].active,
      //     recovered: jsonData[key].recovered,
      //     deaths: jsonData[key].deaths,
      //   });
      // }

      loadedData = jsonData.map((elem) => {
        return {
          ...elem,
          country: elem.country,
          cases: elem.cases,
          active: elem.active,
          recovered: elem.recovered,
          deaths: elem.deaths,
        };
      });
      setTableData(loadedData);
    }
    fetchData();
  }, []);

  return (
    <div id={styles["home-country"]}>
      <div id={styles["country-states"]}>
        <table id={styles.table1}>
          <tbody>
            <tr id={styles["tr-1"]}>
              <th id={styles.countries}>Country</th>
              <th id={styles["total-cases"]}>Total Cases</th>
              <th id={styles["total-active"]}>Active Cases</th>
              <th id={styles["total-recovered"]}>Toal Recovered</th>
              <th id={styles["total-deaths test"]}>Toal Deaths</th>
            </tr>

            {tableData.map((elem) => (
              <tr
                className={styles["table-row"]}
                key={Math.random().toString()}
              >
                <td className={`${styles["table-row"]} ${styles["td-left"]}`}>
                  {elem.country}
                </td>

                <td className={`${styles["table-row"]} ${styles["td-left"]}`}>
                  {elem.cases}
                </td>

                <td className={`${styles["table-row"]} ${styles["td-left"]}`}>
                  {elem.active}
                </td>

                <td className={`${styles["table-row"]} ${styles["td-left"]}`}>
                  {elem.recovered}
                </td>
                <td
                  className={`${styles["table-row"]} ${styles["td-left"]} ${styles["td-right1"]}`}
                >
                  {elem.deaths}
                </td>
              </tr>
            ))}
          </tbody>
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

export default TableData;
