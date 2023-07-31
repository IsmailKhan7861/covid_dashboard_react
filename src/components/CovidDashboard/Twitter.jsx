import React from "react";
import styles from "./Twitter.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Card from "../shared-component/Card";
let loadedData = [];
const Twitter = () => {
  const [twitterData, setTwitterData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url =
        "https://twitter32.p.rapidapi.com/getSearch?hashtag=corona&lang=en";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f8da45c009msh74293eeec542a1fp1e067ajsn208f5584d4eb",
          "X-RapidAPI-Host": "twitter32.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
      } catch (error) {
        console.error(error);
      }

      const data = await fetch(url, options);
      try {
        const jsonData = await data.json();

        loadedData = jsonData.results.map((elem) => {
          return {
            ...elem,
            username: elem.user.username,
            text: elem.text,
            likes: elem.favorite_count,
            shares: elem.retweet_count,
          };
        });

        setTwitterData(loadedData);
      } catch (err) {}
    }
    fetchData();
  }, []);
  if (twitterData.length === 0) {
    return (
      <Card className={`${styles.tweeter} ${styles["empty-data"]}`}>
        <p className={styles.isLoading}>Data Not Found...</p>
      </Card>
    );
  }
  return (
    <Card className={styles.tweeter}>
      <div className={styles["twitter-heading"]}>
        <h2 className={styles.thead}>Latest Tweets</h2>

        <FontAwesomeIcon
          icon={faTwitter}
          size="2xl"
          beatFade
          style={{ color: "#075ef2" }}
        />
      </div>

      {twitterData.map((elem) => (
        <div
          className={styles["twitter-container"]}
          key={Math.random().toString()}
        >
          <div className={styles.title}>
            <h3>{elem.username}</h3>
          </div>
          <p className={styles["twitter-container-para"]}>{elem.text}</p>

          <div className={styles.icons}>
            <div className={styles.likes}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                beatFade
                size="xl"
                style={{ color: "#d6052f" }}
              />
              <p className={styles.likes}>{elem.likes}</p>
            </div>

            <div className={styles.shares}>
              <FontAwesomeIcon
                icon={faShareNodes}
                spin
                size="xl"
                style={{ color: "#0c59df" }}
              />
              <p>{elem.shares}</p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Twitter;
