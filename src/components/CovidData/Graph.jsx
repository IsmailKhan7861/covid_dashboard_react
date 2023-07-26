import styles from "./Graph.module.css";
import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import "chart.js/auto";
//Loaded Data
let loadedData = [
  {
    labels: [],
    datasets: [
      {
        label: "cases",
        borderColor: "red",
        data: [],
        fill: false,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: "recovered",
        borderColor: "green",
        data: [],
        fill: false,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: "deaths",
        borderColor: "blue",
        data: [],
        fill: false,
      },
    ],
  },
];

//Graph Component
const Graph = () => {
  //Set data
  const [graphData, setGraphData] = useState([]);
  //for button Clicks
  const [graphMode, setGraphMode] = useState("confirmed");
  //for index
  const [currIndex, setCurrentIndex] = useState();

  useEffect(() => {
    async function fetchData() {
      const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=200";
      const data = await fetch(url);
      const jsonData = await data.json();
      //Adding labels in the data

      loadedData = loadedData.map((item) => {
        const data1 = jsonData[item.datasets[0].label];

        return {
          ...item,
          labels: Object.keys(data1),
          datasets: [
            {
              ...item.datasets[0],
              data: Object.values(data1),
            },
          ],
        };
      });

      setGraphData(loadedData);
      setCurrentIndex(0);
    }
    fetchData();
  }, []);
  //confirmed
  const confirmedFunc = () => {
    setGraphMode("confirmed");
    setCurrentIndex(0);
  };
  //recovered
  const recoveredFunc = () => {
    setGraphMode("recovered");
    setCurrentIndex(1);
  };
  //deaths
  const deathsFunc = () => {
    setGraphMode("deaths");
    setCurrentIndex(2);
  };

  //For adding background classes
  const confirmedClass = graphMode === "confirmed" ? styles.active : "";
  const recoveredClass = graphMode === "recovered" ? styles.active : "";
  const deathsClass = graphMode === "deaths" ? styles.active : "";

  return (
    <div id={styles.trends}>
      <div id={styles["trends-header"]}>
        <h1 className={styles.trend}>Spread Trends</h1>
        <div className={styles.buttons}>
          <h3
            id={styles.confirmed}
            className={confirmedClass}
            onClick={confirmedFunc}
          >
            Confirmed
          </h3>

          <h3
            id={styles.recovered}
            className={recoveredClass}
            onClick={recoveredFunc}
          >
            Recovered
          </h3>
          <h3 id={styles.deceased} className={deathsClass} onClick={deathsFunc}>
            Deceased
          </h3>
        </div>
      </div>
      <Line
        className={styles["line-chart"]}
        data={
          graphData[currIndex] || {
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [
              {
                label: "recovered",
                borderColor: "green",
                data: [],
                fill: false,
              },
            ],
          }
        }
      />
    </div>
  );
};

export default Graph;
