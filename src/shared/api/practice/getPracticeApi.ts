import { IPractice } from "../../interfaces/practice";
import { practiceApi } from "./practiceApi";

const getPracticeApi = practiceApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPractice: build.query<IPractice[], void>({
      query: () => ({
        url: "/practices",
        method: "GET",
      }),

      // providesTags: (result) =>
      // result
      //     ? [
      //           ...result.map(({ id }) => ({ type: 'Sections', id })),
      //           { type: 'Sections', id: 'LIST' },
      //       ]
      //     : [{ type: 'Sections', id: 'LIST' }],
    }),
    getMyPractice: build.query<IPractice[], number>({
      query: (id) => ({
        url: "/practices",
        method: "GET",
        params: {companyId:  id}
      }),

     
    }),

    getPracticeById: build.query<IPractice, number>({
      query: (id) => ({
        url: `/practices/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllPracticeQuery, useGetPracticeByIdQuery, useLazyGetMyPracticeQuery } = getPracticeApi;
