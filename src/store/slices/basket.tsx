import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BasketAction, ProductSlice} from '@src/store/slices/types';

const initialState: ProductSlice[] = [];

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state: ProductSlice[], action: PayloadAction<BasketAction>) => {
      const existingProduct = state.find(
        item => item.id === action.payload.product.id,
      );
      if (existingProduct) {
        if (action.payload.actionType === 'plus') {
          existingProduct.count += 1;
        } else if (action.payload.actionType === 'minus') {
          if (existingProduct.count > 1) {
            existingProduct.count -= 1;
          } else {
            const index = state.indexOf(existingProduct);
            state.splice(index, 1);
          }
        }
      } else if (action.payload.actionType === 'plus') {
        const productWithCount: ProductSlice = {
          ...action.payload.product,
          count: 1,
        };
        state.push(productWithCount);
      }
    },
  },
});

export const {setBasket} = basketSlice.actions;

export const getTotalPrice = createSelector(
  (state: ProductSlice[]) => state,
  basket => {
    return basket.reduce((total, product) => {
      return total + parseFloat(product.price) * product.count;
    }, 0);
  },
);

export const getTotalProductsCount = createSelector(
  (state: ProductSlice[]) => state,
  basket => {
    return basket.reduce((total, product) => {
      return total + product.count;
    }, 0);
  },
);

export default basketSlice.reducer;
