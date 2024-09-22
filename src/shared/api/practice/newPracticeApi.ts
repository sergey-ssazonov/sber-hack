import { IPractice } from "../../interfaces/practice";
import { practiceApi } from "./practiceApi";

const newPracticeApi = practiceApi.injectEndpoints({
  endpoints: (build) => ({
    createPractice: build.mutation<IPractice, IPractice>({
      query: () => ({
        url: "/contracts/get_all",
        method: "POST",
      }),

      // providesTags: (result) =>
      // result
      //     ? [
      //           ...result.map(({ id }) => ({ type: 'Sections', id })),
      //           { type: 'Sections', id: 'LIST' },
      //       ]
      //     : [{ type: 'Sections', id: 'LIST' }],
    }),

    
  }),
  overrideExisting: false,
});

export const { useCreatePracticeMutation } = newPracticeApi;
