import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type
import {RouteSliceParams} from './types';

const initialState: RouteSliceParams = {
  path: 'RootNavigator',
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoute: (
      state: RouteSliceParams,
      action: PayloadAction<RouteSliceParams>,
    ) => {
      state.path = action.payload.path;
    },
  },
});

// noinspection JSUnusedGlobalSymbols
export const {setRoute} = routeSlice.actions;
export default routeSlice.reducer;
