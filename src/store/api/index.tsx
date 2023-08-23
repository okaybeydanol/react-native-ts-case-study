import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Utils
import {baseUrl} from '@src/constants';

// Type
import {ProductsApiResponse} from '@src/store/api/types';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    getProducts: builder.query<ProductsApiResponse[], void>({
      query: () => ({
        url: 'products',
        method: 'GET',
      }),
    }),
  }),
});

export const {useLazyGetProductsQuery} = commonApi;
