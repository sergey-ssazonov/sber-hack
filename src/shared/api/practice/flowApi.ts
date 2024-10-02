import { IFlow, INewFlow, IPractice } from "../../interfaces/practice";
import { practiceApi } from "./practiceApi";

const flowApi = practiceApi.injectEndpoints({
  endpoints: (build) => ({
    getFlowsByPractice: build.query<IFlow[], number>({
      query: (id) => ({
        url: `/practices/${id}/practice-requests`,
        method: "GET",
      }),
    }),

    createFlow: build.mutation<IFlow, INewFlow>({
      query: (id) => ({
        url: `/practices/${id}/practice-requests`,
        method: "POST",
      }),
    }),

    acceptFlow: build.mutation<IFlow, number>({
      query: (id) => ({
        url: `/practice-requests/${id}/accept`,
        method: "PATCH",
      }),
    }),
    canelFlow: build.mutation<IFlow, number>({
      query: (id) => ({
        url: `/practice-requests/${id}/cancel`,
        method: "PATCH",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAcceptFlowMutation,
  useCanelFlowMutation,
  useGetFlowsByPracticeQuery,
  useCreateFlowMutation,
} = flowApi;
