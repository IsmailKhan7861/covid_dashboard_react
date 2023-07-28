import Card from "../shared-component/Card";
import styles from "./Map.module.css";

const AffectedAreas = () => {
  return (
    <Card className={styles["affected-areas"]}>
      <div className={styles["affected-heading"]}>
        <h1>COVID-19 Affected Areas</h1>

        <div className={styles["type-affected"]}>
          <div className={styles["most-affected"]}></div>
          <h3>Most Affected</h3>
        </div>

        <div className={styles["type-affected"]}>
          <div className={styles["less-affected"]}></div>
          <h3>Less Affected</h3>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        className={styles.map}
      />
    </Card>
  );
};

export default AffectedAreas;
