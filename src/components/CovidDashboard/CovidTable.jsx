import { useEffect } from "react";
import { getTableData } from "../../store/createTableSlice";
import { useDispatch, useSelector } from "react-redux";
import TableData from "./TableData";
const CovidTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTableData());
  }, []);
  const data = useSelector((state) => state.table);
  return (
    <TableData
      data={data.tableRecords || []}
      header={Object.keys(data.tableRecords[0] || [])}
    />
  );
};

export default CovidTable;
