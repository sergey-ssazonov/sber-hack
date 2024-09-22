import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants";

export const directionApi = createApi({
  reducerPath: "direction",
  tagTypes: ["direction"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: "include",
  }),

  endpoints: () => ({}),
});
