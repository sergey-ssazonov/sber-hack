// import { ILoginData, IResponse } from '@/shared/interfaces/login.interface';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants";
import {
  IRegisterResponse,
  IResponse,
  IUser,
  IUserRegisterData,
  TLoginData,
} from "../../interfaces/user";

export const userApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: "include",
  }),

  endpoints: () => ({}),
});
