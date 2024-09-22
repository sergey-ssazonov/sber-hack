import { ICompany } from "../../interfaces/company";
import { IPractice } from "../../interfaces/practice";
import { companyApi } from "./companyApi";

const getCompanyApi = companyApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCompany: build.query<ICompany[], void>({
      query: () => ({
        url: "/companies",
        method: "GET",
      }),
    }),
    getCompanyCount: build.query<number, void>({
      query: (id) => ({
        url: "/companies/count",
        method: "GET",
        params: { companyId: id },
      }),
    }),

    getCompanyById: build.query<ICompany, number>({
      query: (id) => ({
        url: `/companies/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCompanyQuery, useLazyGetCompanyByIdQuery, useGetCompanyCountQuery } =
  getCompanyApi;
