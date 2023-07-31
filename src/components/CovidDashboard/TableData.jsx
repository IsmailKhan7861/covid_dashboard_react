import React from "react";
import styles from "./TableData.module.css";
import Card from "../shared-component/Card";

const TableData = ({ data, header }) => {
  if (data.length === 0) {
    return (
      <Card
        className={`${styles["country-states"]}  ${styles["table-loader"]}`}
      >
        <div className={styles.table}>
          <p className={styles.loader}></p>
        </div>
      </Card>
    );
  }

  return (
    <Card className={styles["country-states"]}>
      <table className={styles.table1}>
        <tbody>
          <tr className={styles["tr-1"]}>
            {header.map((elem) => (
              <th className={styles["table-style"]}>{elem}</th>
            ))}
          </tr>
          {data.map((elem) => (
            <tr className={styles["table-row"]}>
              {Object.values(elem).map((value) => (
                <td className={`${styles["table-row"]} ${styles["td-left"]}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default TableData;
