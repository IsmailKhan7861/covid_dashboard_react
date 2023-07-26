import styles from "./GraphNewsContainer.module.css";
import Graph from "./Graph";
import News from "./News";

const GraphNewsContainer = () => {
  return (
    <div id={styles["home-updates"]}>
      <Graph />
      <News />
    </div>
  );
};

export default GraphNewsContainer;
