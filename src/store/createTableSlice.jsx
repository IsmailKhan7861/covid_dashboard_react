import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TableDataUrl } from "../components/CovidDashboard/utils";
let loadedData = [];

export const getTableData = createAsyncThunk(
  "tableThunk",
  async (args, { rejectWithValue }) => {
    const url = TableDataUrl;
    const response = await fetch(url);
    try {
      const results = await response.json();

      loadedData = results.map((elem) => {
        return {
          country: elem.country,
          cases: elem.cases,
          active: elem.active,
          recovered: elem.recovered,
          deaths: elem.deaths,
        };
      });
      return loadedData;
    } catch (error) {
      rejectWithValue("Table Data not found");
    }
  }
);

export const tableSlice = createSlice({
  name: "tableData",
  initialState: { tableRecords: [], loading: false, error: true },
  extraReducers: {
    [getTableData.pending]: (state) => {
      state.loading = true;
    },
    [getTableData.fulfilled]: (state, action) => {
      state.loading = false;
      state.tableRecords = action.payload;
    },
    [getTableData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default tableSlice.reducer;
