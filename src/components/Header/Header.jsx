import React  from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.css";


const Header = () => {
    return (
        <div id={styles.navbar}>
       <FontAwesomeIcon icon={faVirus} size="2xl" style={{color: "#d41659",}} />
        <h1 id={styles.heading}>COVID-19</h1>
      </div>
    )
}

export default Header;