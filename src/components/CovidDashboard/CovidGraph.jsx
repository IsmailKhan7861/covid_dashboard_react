import Graph from "./Graph";
import { useEffect } from "react";
import { getGraphData } from "../../store/createGraphSlice";
import { useDispatch, useSelector } from "react-redux";

const CovidGraph = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGraphData());
  }, []);
  const data = useSelector((state) => state.graph);

  return <Graph data={data.graphPoints} />;
};

export default CovidGraph;
