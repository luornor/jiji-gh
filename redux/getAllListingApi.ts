import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Listing } from "@/types/ListingType";

export const getAllListingApi = createApi({
  reducerPath: "getAllListingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL, 
    prepareHeaders: (headers, { getState }) => {
      // If we have a token, set it in the headers
      const token = sessionStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },// Replace with your API's base URL
  }),
  endpoints: (builder) => ({
    getAllListings: builder.query<Listing[], void>({
      query: () => ({
        url: 'listings/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllListingsQuery } = getAllListingApi;
