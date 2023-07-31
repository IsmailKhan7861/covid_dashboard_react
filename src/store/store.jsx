import { configureStore } from "@reduxjs/toolkit";
import worldDataSlice from "./createWorldSlice";
import newsDataSlice from "./createNewsSlice";
import tableSlice from "./createTableSlice";
import graphSlice from "./createGraphSlice";
export const store = configureStore({
  reducer: {
    world: worldDataSlice,
    news: newsDataSlice,
    table: tableSlice,
    graph: graphSlice,
  },
});
