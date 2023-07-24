import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div id={styles.navbar}>
      <FontAwesomeIcon
        icon={faVirusCovid}
        beat
        size="2xl"
        style={{ color: "#f80d3c" }}
      />
      <h1 id={styles.heading}>COVID-19</h1>
    </div>
  );
};

export default Header;
