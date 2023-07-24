import styles from "./BottomLeft.module.css";
import Graph from "./Graph";
import News from "./News";

const BottomLeft = () => {
  return (
    <div id={styles["home-updates"]}>
      <Graph />
      <News />
    </div>
  );
};

export default BottomLeft;
