import React  from "react";
import styles from "./LeftContainer.module.css";
import TopLeft from "./TopLeft";

const LeftContainer = () =>{
    console.log("leftcontsiner")
    return (

        <div id = {styles.left}>
           <TopLeft />
        </div>
        
    )
}

export default LeftContainer;
