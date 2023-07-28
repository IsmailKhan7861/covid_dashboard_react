import React from "react";
import styles from "./TableData.module.css";
import { useState, useEffect } from "react";

import Card from "../shared-component/Card";
const TableData = ({ data = [], header = [] }) => {
  const [tableData, setTableData] = useState([]);
  const [tableHeader, setTableHeader] = useState([]);

  useEffect(() => {
    setTableData(data);
    setTableHeader(header);
  }, [data, tableHeader]);

  if (data.length === 0) {
    return (
      <Card
        className={`${styles["country-states"]}  ${styles["table-loader"]}`}
      >
        <table className={styles.table}>
          <p className={styles.loader}></p>
        </table>
      </Card>
    );
  }

  return (
    <Card className={styles["country-states"]}>
      <table className={styles.table1}>
        <tbody>
          <tr className={styles["tr-1"]}>
            {tableHeader.map((elem) => (
              <th className={styles["table-style"]}>{elem}</th>
            ))}
          </tr>

          {tableData.map((elem) => (
            <tr className={styles["table-row"]} key={Math.random().toString()}>
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
