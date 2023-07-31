import styles from "./News.module.css";
import { useEffect } from "react";
import { useRef } from "react";
import Card from "../shared-component/Card";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../store/createNewsSlice";

const News = () => {
  const slideContainer = useRef();
  const newsContainer = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsData());
  }, []);
  const data = useSelector((state) => state.news);

  //For Button
  const nextButton = () => {
    const slideWidth = newsContainer.current.clientWidth;
    slideContainer.current.scrollLeft += slideWidth;
  };
  const prevButton = () => {
    const slideWidth = newsContainer.current.clientWidth;
    slideContainer.current.scrollLeft -= slideWidth;
  };

  if (data.newsContent.length === 0) {
    return (
      <Card className={styles.news}>
        <h1 className={styles["news-header"]}>NEWS</h1>
        <div className={`${styles.main} ${styles["main-loader"]}`}>
          <div className={styles["loader-line"]}></div>
        </div>
      </Card>
    );
  }
  return (
    <Card className={styles.news}>
      <h1 className={styles["news-header"]}>NEWS</h1>
      <div className={styles.main}>
        <div className={styles["slides-container"]} ref={slideContainer}>
          <button
            className={`${styles["slide-arrow"]} ${styles["slide-arrow-prev"]}`}
            onClick={() => prevButton(newsContainer, slideContainer)}
          >
            &#8249;
          </button>
          <button
            className={`${styles["slide-arrow"]} ${styles["slide-arrow-next"]}`}
            onClick={() => nextButton(newsContainer, slideContainer)}
          >
            &#8250;
          </button>
          {data.newsContent.map((elem) => (
            <div
              className={`${styles.slides} ${styles["news-container"]}`}
              ref={newsContainer}
              key={Math.random().toString()}
            >
              <img className={styles.image} src={elem.img} />
              <h3 className={styles.headlines}>
                <a href={elem.links} target="_blank" className={styles.link}>
                  {elem.title}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default News;
