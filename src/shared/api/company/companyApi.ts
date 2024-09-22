import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants";

export const companyApi = createApi({
  reducerPath: "company",
  tagTypes: ["company"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: "include",
  }),

  endpoints: () => ({}),
});
