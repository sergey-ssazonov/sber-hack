import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth/authApi";

const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
