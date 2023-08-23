import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: string[] = ['-1'];

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state: string[], action: PayloadAction<string>) => {
      const findIndex = state.findIndex(id => id === action.payload);
      if (findIndex === -1) {
        state.push(action.payload);
      }
      if (findIndex !== -1) {
        state.splice(findIndex, 1);
      }
    },
  },
});

export const {setFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
