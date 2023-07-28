import styles from "./Graph.module.css";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Card from "../shared-component/Card";
import Button from "../shared-component/Button";
//Graph Component
const Graph = ({ data = [] }) => {
  //Set data
  const [graphData, setGraphData] = useState([]);
  //for button Clicks
  const [graphMode, setGraphMode] = useState("confirmed");
  //for index
  const [currIndex, setCurrentIndex] = useState();

  useEffect(() => {
    setGraphData(data);
    setCurrentIndex(0);
  }, [data]);
  console.log(data);
  const sharedEventHandler = (identidfier) => {
    if (identidfier === "confirmed") {
      setGraphMode("confirmed");
      setCurrentIndex(0);
    } else if (identidfier === "recovered") {
      setGraphMode("recovered");
      setCurrentIndex(1);
    } else if (identidfier === "deaths") {
      setGraphMode("deaths");
      setCurrentIndex(2);
    }
  };

  //For adding background classes
  const confirmedClass = graphMode === "confirmed" ? styles.active : "";
  const recoveredClass = graphMode === "recovered" ? styles.active : "";
  const deathsClass = graphMode === "deaths" ? styles.active : "";

  return (
    <Card className={styles.trends}>
      <div className={styles["trends-header"]}>
        <h1 className={styles.trend}>Spread Trends</h1>
        <div className={styles.buttons}>
          <Button className={confirmedClass}>
            <h3
              onClick={() => {
                sharedEventHandler("confirmed");
              }}
            >
              Confirmed
            </h3>
          </Button>
          <Button className={recoveredClass}>
            <h3
              onClick={() => {
                sharedEventHandler("recovered");
              }}
            >
              Recovered
            </h3>
          </Button>
          <Button className={deathsClass}>
            <h3
              onClick={() => {
                sharedEventHandler("deaths");
              }}
            >
              Deceased
            </h3>
          </Button>
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
    </Card>
  );
};

export default Graph;
