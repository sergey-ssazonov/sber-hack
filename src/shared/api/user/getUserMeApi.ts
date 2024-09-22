"use client";

import { IUser } from "../../interfaces/user";
import { userApi } from "./userApi";

const loginUserApi = userApi.injectEndpoints({
  endpoints: (build) => ({
    getUserMe: build.query<IUser, void>({
      query: () => ({
        url: `/users/me`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserMeQuery } = loginUserApi;
