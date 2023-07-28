import React from "react";
import WorldData from "./WorldData";
import TableData from "./TableData";
import styles from "./CovidDashboard.module.css";
import Ratio from "./Ratio";
import Twitter from "./Twitter";
import Graph from "./Graph";
import News from "./News";
import Map from "./Map";
import { useEffect, useState } from "react";
import {
  NewsDataUrl,
  WorldDataUrl,
  TableDataUrl,
  newsOptionsUrl,
  graphUrl,
  twitterUrl,
  twitterOptions,
  loadedDataTable,
  loadedDataGraph,
} from "./utils";

let loadedTableData = loadedDataTable;
let loadedGraphData = loadedDataGraph;
const CovidDashboard = () => {
  const [countWorldData, setCountWorldData] = useState([]);
  const [countTableData, setCountTableData] = useState([]);
  const [CountnewsData, setCountNewsData] = useState([]);
  const [countGraphData, setCountGraphData] = useState([]);
  const [percentage, setCountPercentage] = useState("Loading");
  const [countTwitter, setCountTwitter] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  //WORLD DATA
  const worldDataFetch = async () => {
    let urlWorldData = WorldDataUrl;
    let worldData = await fetch(urlWorldData);
    let worldJsonData = await worldData.json();
    setCountWorldData(worldJsonData);
  };
  //FETCH TABLE DATA
  const tableDataFetch = async () => {
    let urlTableData = TableDataUrl;
    let tableData = await fetch(urlTableData);
    let tableJsonData = await tableData.json();
    loadedTableData = tableJsonData.map((elem) => {
      return {
        country: elem.country,
        cases: elem.cases,
        active: elem.active,
        recovered: elem.recovered,
        deaths: elem.deaths,
      };
    });
    setCountTableData(loadedTableData);
    try {
      setTableHeaders(Object.keys(loadedTableData[0]));
    } catch (err) {}
  };

  //FETCH NEWSDATA
  const newsDataFetch = async () => {
    let urlNewsData = NewsDataUrl;
    const Newsoptions = newsOptionsUrl;

    let newsData = await fetch(urlNewsData, Newsoptions);
    let newsJsonData = await newsData.json();
    setCountNewsData(newsJsonData);
  };

  //FETCH GRAPH DATA
  const graphDataFetch = async () => {
    // FETCHING GRAPH DATA
    let graphData = await fetch(graphUrl);
    let graphJsonData = await graphData.json();
    loadedGraphData = loadedGraphData.map((item) => {
      const data1 = graphJsonData[item.datasets[0].label];

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
    setCountGraphData(loadedGraphData);
  };

  //FETCHING TWITTER DATA
  let twitterDataFetch = async () => {
    let twitterData = await fetch(twitterUrl, twitterOptions);
    let twitterJsonData = await twitterData.json();
    setCountTwitter(twitterJsonData);
  };
  useEffect(() => {
    async function fetchData() {
      let worldData = await worldDataFetch();
      let tableData = await tableDataFetch();
      let newsData = await newsDataFetch();
      let grapData = await graphDataFetch();
      let twitterData = await twitterDataFetch();
    }
    //FeTCHING
    fetchData();
  }, []);

  //FOR PERCENTAGE
  let calculatePercentage =
    Math.floor((countWorldData.recovered / countWorldData.cases) * 100) + "%";
  useEffect(() => {
    setCountPercentage(calculatePercentage);
  }, [calculatePercentage]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <WorldData data={countWorldData} />
        <div className={styles["home-country"]}>
          <TableData data={countTableData} header={tableHeaders} />
          <Map />
        </div>
        <div className={styles["home-updates"]}>
          <Graph data={countGraphData} />
          <News data={CountnewsData} />
        </div>
      </div>
      <div className={styles.right}>
        <Ratio data={percentage} />
        <Twitter data={countTwitter} />
      </div>
    </div>
  );
};
export default CovidDashboard;
