import styles from "./News.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
const News = () => {
  const [newsData, setNewsData] = useState([]);
  const slideContainer = useRef();
  const newsContainer = useRef();

  useEffect(() => {
    let loadedData = [];
    async function fetchData() {
      const url =
        "https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f8da45c009msh74293eeec542a1fp1e067ajsn208f5584d4eb",
          "X-RapidAPI-Host": "covid-19-news.p.rapidapi.com",
        },
      };

      const data = await fetch(url, options);
      const jsonData = await data.json();

      for (const key in jsonData.articles) {
        loadedData.push({
          title: jsonData.articles[key].title,
          summary: jsonData.articles[key].summary,
          links: jsonData.articles[key].link,
          img: jsonData.articles[key].media,
        });
      }
      setNewsData(loadedData);
    }

    fetchData();
  }, []);
  const nextButton = () => {
    const slideWidth = newsContainer.current.clientWidth;
    slideContainer.current.scrollLeft += slideWidth;
  };
  const prevButton = () => {
    const slideWidth = newsContainer.current.clientWidth;
    slideContainer.current.scrollLeft -= slideWidth;
  };
  return (
    <div id={styles.news}>
      <h1 id={styles["news-header"]}>NEWS</h1>
      <div id={styles.main}>
        <div id={styles["slides-container"]} ref={slideContainer}>
          <button
            class={styles["slide-arrow"]}
            id={styles["slide-arrow-prev"]}
            onClick={() => prevButton(newsContainer, slideContainer)}
          >
            &#8249;
          </button>
          <button
            class={styles["slide-arrow"]}
            id={styles["slide-arrow-next"]}
            onClick={() => nextButton(newsContainer, slideContainer)}
          >
            &#8250;
          </button>
          {newsData.map((elem) => (
            <div
              className={`${styles.slides} ${styles["news-container"]}`}
              ref={newsContainer}
            >
              <h3 className={styles.headlines}>{elem.title}</h3>
              <p className={styles.text}>{elem.summary}</p>
              <img className={styles.image} src={elem.img} />
              <a href={elem.links} target="_blank">
                {elem.links}
              </a>
              {/* <button
                class={styles["slide-arrow"]}
                id={styles["slide-arrow-prev"]}
                onClick={() => prevButton(newsContainer, slideContainer)}
              >
                &#8249;
              </button>
              <button
                class={styles["slide-arrow"]}
                id={styles["slide-arrow-next"]}
                onClick={() => nextButton(newsContainer, slideContainer)}
              >
                &#8250;
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
