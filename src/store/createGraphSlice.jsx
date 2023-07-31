import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { graphUrl } from "../components/CovidDashboard/utils";

let loadedDataGraph = [
  {
    labels: [],
    datasets: [
      {
        label: "cases",
        borderColor: "red",
        data: [],
        fill: false,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: "recovered",
        borderColor: "green",
        data: [],
        fill: false,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: "deaths",
        borderColor: "blue",
        data: [],
        fill: false,
      },
    ],
  },
];

export const getGraphData = createAsyncThunk(
  "graphThunk",
  async (args, { rejectWithValue }) => {
    const url = graphUrl;
    try {
      const response = await fetch(url);
      const results = await response.json();
      loadedDataGraph = loadedDataGraph.map((item) => {
        const data1 = results[item.datasets[0].label];

        return {
          ...item,
          labels: Object.keys(data1),
          datasets: [
            {
              ...item.datasets[0],
              data: Object.values(data1),
            },
          ],
        };
      });
      return loadedDataGraph;
    } catch (error) {
      rejectWithValue("Graph Data not found");
    }
  }
);

export const graphDataSlice = createSlice({
  name: "graphSlice",
  initialState: {
    graphPoints: [],
    error: null,
  },
  extraReducers: {
    [getGraphData.pending]: (state) => {
      state.loading = true;
    },
    [getGraphData.fulfilled]: (state, action) => {
      state.graphPoints = action.payload;
    },
    [getGraphData.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default graphDataSlice.reducer;
