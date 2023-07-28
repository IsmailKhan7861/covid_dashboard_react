import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <FontAwesomeIcon
        icon={faVirusCovid}
        beat
        size="2xl"
        style={{ color: "#f80d3c" }}
      />
      <h1 className={styles.heading}>COVID-19</h1>
    </div>
  );
};

export default Header;
