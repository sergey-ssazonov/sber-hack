import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../../api/user/userApi";
import { practiceApi } from "../../api/practice/practiceApi";
import { directionApi } from "../../api/direction";
import { companyApi } from "../../api/company/companyApi";
import { newsApi } from "../../api/news/newsApi";

const reducers = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [practiceApi.reducerPath]: practiceApi.reducer,
  [directionApi.reducerPath]: directionApi.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(practiceApi.middleware)
      .concat(directionApi.middleware)
      .concat(companyApi.middleware)
      .concat(newsApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
