import React from "react";
import styles from "./Twitter.module.css";

const Twitter = () => {
  return (
    <div id={styles.tweeter}>
      <div className={styles["twitter-heading"]}>
        <h2 id={styles.thead}>Latest Tweets</h2>
        <p>Logo</p>
      </div>

      <div className={styles["twitter-container"]}>
        <div className={styles.title}>
          <h3>World Health Organisation (WHO) </h3>
        </div>
        <p className={styles["twitter-container-para"]}>
          The full briefing on #COVID19 by @DrTedros 👇 https://t.co/rVKnkY3Xe5
        </p>

        <div className={styles.icons}>
          <div className={styles.likes}>
            <p>Logo</p>
            <p className={styles.likes}>105</p>
          </div>

          <div className={styles.shares}>
            <p>Logo</p>
            <p>23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
