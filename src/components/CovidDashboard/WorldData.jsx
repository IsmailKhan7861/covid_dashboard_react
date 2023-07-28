import styles from "./WorldData.module.css";
import { useEffect, useState } from "react";
import Card from "../shared-component/Card";

import arrowDown from "../../assets/arrow-red.png";
import arrowUp from "../../assets/arrow-green.png";
import totalCases from "../../assets/img1.png";
import totalRecoverd from "../../assets/img2.png";
import totalActive from "../../assets/img3.png";
import totalDeaths from "../../assets/img4.png";

let loadedData = [
  {
    id: "cases",
    image: totalCases,
    title: "Total Cases",
    arrowImage: arrowDown,
  },
  {
    id: "recovered",
    image: totalRecoverd,
    title: "Total Recovered",
    arrowImage: arrowUp,
  },
  {
    id: "active",
    image: totalActive,
    title: "Total Active",
    arrowImage: arrowDown,
  },
  {
    id: "deaths",
    image: totalDeaths,
    title: "Total Deaths",
    arrowImage: arrowDown,
  },
];

const WorldData = ({ data = [] }) => {
  const [countData, setCountData] = useState([]);
  useEffect(() => {
    loadedData = loadedData.map((elem) => {
      const id1 = data[elem.id];
      return {
        ...elem,
        data: id1,
      };
    });
    setCountData(loadedData);
  }, [data]);

  if (data.length === 0) {
    return (
      <div className={styles["live-data"]}>
        {countData.map(() => (
          <Card className={`${styles["loader-box"]} ${styles.box}`}>
            {<p className={styles.loader}></p>}
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className={styles["live-data"]}>
      {countData.map((elem) => (
        <Card className={styles.box}>
          <div>
            <div className={styles.cases}>
              <p>{elem.title}</p>
              <img src={elem.arrowImage} alt="arrow Down" />
            </div>
            {}
            <h3>{elem.data}</h3>
          </div>
          <img src={elem.image} alt="Images" />
        </Card>
      ))}
    </div>
  );
};

export default WorldData;
