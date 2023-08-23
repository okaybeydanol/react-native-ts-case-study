import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type
import {FilterSliceParams} from './types';
import {ProductsApiResponse} from '@src/store/api/types';

const initialState: FilterSliceParams = {
  order: 'Old to new',
  brands: [],
  models: [],
  product: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (
      state: FilterSliceParams,
      action: PayloadAction<FilterSliceParams>,
    ) => {
      state.brands = action.payload.brands;
      state.models = action.payload.models;
      state.order = action.payload.order;
    },
    setFilteredProducts: (
      state: FilterSliceParams,
      action: PayloadAction<{product: ProductsApiResponse[]}>,
    ) => {
      state.product = action.payload.product;
    },
  },
});

// noinspection JSUnusedGlobalSymbols
export const {setFilter, setFilteredProducts} = filterSlice.actions;
export default filterSlice.reducer;
