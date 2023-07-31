import styles from "./WorldData.module.css";
import { useEffect } from "react";
import Card from "../shared-component/Card";
import { useDispatch, useSelector } from "react-redux";
import { getWorldData } from "../../store/createWorldSlice";

const WorldData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorldData());
  }, []);
  const data = useSelector((state) => state.world);

  if (data.isLoading) {
    return (
      <div className={styles["live-data"]}>
        {data.worldData.map(() => (
          <Card className={`${styles["loader-box"]} ${styles.box}`}>
            {<p className={styles.loader}></p>}
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div className={styles["live-data"]}>
      {data.worldData.map((elem) => (
        <Card className={styles.box} key={Math.random().toString()}>
          <div>
            <div className={styles.cases}>
              <p>{elem.title}</p>
              <img src={elem.arrowImage} alt="arrow Down" />
            </div>
            {}
            <h3>{elem.data}</h3>
          </div>
          <img src={elem.image} alt="Images" />
        </Card>
      ))}
    </div>
  );
};
export default WorldData;
