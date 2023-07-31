import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import arrowDown from "../assets/arrow-red.png";
import arrowUp from "../assets/arrow-green.png";
import totalCases from "../assets/img1.png";
import totalRecoverd from "../assets/img2.png";
import totalActive from "../assets/img3.png";
import totalDeaths from "../assets/img4.png";

let loadedData = [
  {
    id: "cases",
    image: totalCases,
    title: "Total Cases",
    arrowImage: arrowDown,
  },
  {
    id: "recovered",
    image: totalRecoverd,
    title: "Total Recovered",
    arrowImage: arrowUp,
  },
  {
    id: "active",
    image: totalActive,
    title: "Total Active",
    arrowImage: arrowDown,
  },
  {
    id: "deaths",
    image: totalDeaths,
    title: "Total Deaths",
    arrowImage: arrowDown,
  },
];

export const getWorldData = createAsyncThunk(
  "worldData",
  async (args, { rejectWithValue }) => {
    const url = "https://disease.sh/v3/covid-19/all";
    const response = await fetch(url);
    try {
      const results = await response.json();
      loadedData = loadedData.map((elem) => {
        const id1 = results[elem.id];
        return {
          ...elem,
          data: id1,
        };
      });
      return loadedData;
    } catch (error) {
      rejectWithValue("Data not found");
    }
  }
);

export const worldDataSlice = createSlice({
  name: "worldData",
  initialState: { worldData: loadedData, isLoading: false, error: null },
  extraReducers: {
    [getWorldData.pending]: (state) => {
      state.isLoading = true;
    },
    [getWorldData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.worldData = action.payload;
    },
    [getWorldData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default worldDataSlice.reducer;
