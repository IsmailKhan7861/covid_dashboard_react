import styles from "./News.module.css";

const News = () => {
  return (
    <div id={styles.news}>
      <h1 id={styles["news-header"]}>NEWS</h1>
    </div>
  );
};

export default News;
