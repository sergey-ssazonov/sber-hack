// import { ILoginData, IResponse } from '@/shared/interfaces/login.interface';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants";
import { IRegisterResponse, IResponse, IUserRegisterData, TLoginData } from "../../interfaces/user";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (build) => ({
    authUser: build.mutation<IResponse, TLoginData>({
      query: (userData) => {
        const formData = new FormData();

        formData.append("username", userData.username);
        formData.append("password", userData.password);

        console.log('hfhhfh',formData)

        return { url: `users/students/login/`, method: "POST", body: formData, formData: true };
      },
    }),
    registrUser: build.mutation<IRegisterResponse, IUserRegisterData>({
      query: (userData) => ({
        url: `users/students/register/`,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useAuthUserMutation } = authApi;
