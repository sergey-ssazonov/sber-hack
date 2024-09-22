import { IDirection, IPractice } from "../../interfaces/practice";
import { directionApi } from "./directionApi";

const getDirectionApi = directionApi.injectEndpoints({
  endpoints: (build) => ({
    getDirections: build.query<IDirection[], void>({
      query: () => ({
        url: "/directions",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetDirectionsQuery } = getDirectionApi;
