import React from "react";
import styles from "./Twitter.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

let loadedData = [];
const Twitter = () => {
  const [twitterData, setTwitterData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const url =
        "https://twitter154.p.rapidapi.com/hashtag/hashtag?hashtag=%23covid18&limit=20&section=top&language=en";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0aa0ac0b63msh09f10d25616a21fp103b00jsn82228c18fa27",
          "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
        },
      };

      const data = await fetch(url, options);
      const jsonData = await data.json();
      setLoading(false);

      for (let key in jsonData.results) {
        loadedData.push({
          username: jsonData.results[key].user.username,
          text: jsonData.results[key].text,
          likes: jsonData.results[key].favorite_count,
          shares: jsonData.results[key].retweet_count,
        });
      }
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
    }
    fetchData();
  }, []);

  return (
    <div id={styles.tweeter}>
      <div className={styles["twitter-heading"]}>
        <h2 id={styles.thead}>Latest Tweets</h2>

        <FontAwesomeIcon
          icon={faTwitter}
          size="2xl"
          beatFade
          style={{ color: "#075ef2" }}
        />
      </div>

      {isLoading && <p className={styles.isLoading}>Loading Data...</p>}
      {!isLoading &&
        twitterData.map((elem) => (
          <div className={styles["twitter-container"]}>
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
    </div>
  );
};

export default Twitter;

{
  /* <div className={styles["twitter-container"]}>
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
      </div> */
}

{
  /* FETCHING DATA */
}
