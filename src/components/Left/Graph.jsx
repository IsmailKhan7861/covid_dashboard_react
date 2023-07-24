import styles from "./Graph.module.css";
const Graph = () => {
  //FETCH API AND DATA
  return (
    <div id={styles.trends}>
      <div id={styles["trends-header"]}>
        <h1 className={styles.trend}>Spread Trends</h1>
        <div className={styles.buttons}>
          <h3 id={styles.confirmed} className={styles.active}>
            Confirmed
          </h3>

          <h3 id={styles.recovered}>Recovered</h3>
          <h3 id={styles.deceased}>Deceased</h3>
        </div>
      </div>
    </div>
  );
};

export default Graph;
