"use client";

import { ILoginUser } from "../../interfaces/user";
import { userApi } from "./userApi";

const loginUserApi = userApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<void, ILoginUser>({
      query: (userData) => {
        return {
          url: `/auth/login`,
          method: "POST",

          // headers: {
          //   //   "Content-Type": "multipart/form-data",
          // },
          body: userData,
        };
      },
    }),
    logoutUser: build.mutation<void, void>({
      query: () => {
        return {
          url: `/auth/logout`,
          method: "DELETE",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLogoutUserMutation, useLoginUserMutation } = loginUserApi;
