import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Listing } from "@/types/ListingType";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL, 
    prepareHeaders: (headers, { getState }) => {
      // If we have a token, set it in the headers
      const token = sessionStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getShopListings: builder.query<Listing[], { shopId: string }>({
      query: (queryArg) => ({
        url: `shops/${queryArg.shopId}`,
        method: 'GET',
      }),
    }),
    addShopListings: builder.mutation<any, {shopId: string; title: string; body: string; }>({
      query: (queryArg) => ({
        url: `shops/${queryArg.shopId}`,
        method: "POST",
        body: {
          title: queryArg.title,
          body: queryArg.body,
        },
      }),
    }),
  }),
});

export const { useGetShopListingsQuery,useAddShopListingsMutation } = shopApi;
