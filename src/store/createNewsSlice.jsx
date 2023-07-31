//News
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  NewsDataUrl,
  newsOptionsUrl,
} from "../components/CovidDashboard/utils";

let loadedData = [];

export const getNewsData = createAsyncThunk(
  "newsData",
  async (args, { rejectWithValue }) => {
    const response = await fetch(NewsDataUrl, newsOptionsUrl);
    try {
      const results = await response.json();
      loadedData = results.articles.map((elem) => {
        return {
          ...elem,
          title: elem.title,
          summary: elem.summary,
          links: elem.link,
          img: elem.media,
        };
      });
      return loadedData;
    } catch (error) {
      rejectWithValue("News Error! Data Not Found");
    }
  }
);

export const newsDataSlice = createSlice({
  name: "newsSlice",
  initialState: {
    newsContent: [],
    isLoaded: false,
    error: null,
  },
  extraReducers: {
    [getNewsData.pending]: (state) => {
      state.loading = true;
    },
    [getNewsData.fulfilled]: (state, action) => {
      state.loading = false;
      state.newsContent = action.payload;
    },
    [getNewsData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default newsDataSlice.reducer;
