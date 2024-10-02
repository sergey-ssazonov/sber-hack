import { ICompany } from "../../interfaces/company";
import { INews } from "../../interfaces/news/news.interface";
import { IPractice } from "../../interfaces/practice";
import { newsApi } from "./newsApi";

const crudNewsApi = newsApi.injectEndpoints({
  //   tagTypes: ["news"],
  endpoints: (build) => ({
    getAllNews: build.query<INews[], void>({
      query: () => ({
        url: "/news",
        method: "GET",
      }),

      //   providesTags: (result) =>
      //     result
      //       ? [...result.map(({ title }) => ({ type: "news", title })), { type: "news", id: "LIST" }]
      //       : [{ type: "news", id: "LIST" }],
    }),
    createNews: build.mutation<INews, INews>({
      query: ({ title, description }) => ({
        url: "/news",
        method: "POst",
        body: { title, description },
      }),
    }),

    // getCompanyById: build.query<ICompany, number>({
    //   query: (id) => ({
    //     url: `/companies/${id}`,
    //     method: "GET",
    //   }),
    // }),
  }),
  overrideExisting: false,
});

export const { useGetAllNewsQuery, useCreateNewsMutation } = crudNewsApi;
