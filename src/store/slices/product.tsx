import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type
import {ProductsApiResponse} from '@src/store/api/types';

const initialState: ProductsApiResponse[] | [] = [];

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (
      state: ProductsApiResponse[],
      action: PayloadAction<ProductsApiResponse[]>,
    ) => {
      return action.payload;
    },
  },
});

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;
