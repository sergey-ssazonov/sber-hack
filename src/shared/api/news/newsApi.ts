import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants";

export const newsApi = createApi({
  reducerPath: "news",
  tagTypes: ["news"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: "include",
  }),

  endpoints: () => ({}),
});
