import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { NavState } from '../../data/interfaces';

const navSlice = createSlice({
  name: 'nav',
  initialState: {} as NavState,
  reducers: {
    setBrandName: (state, action: PayloadAction<string>) => {
      state.brandName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getInitialState.matchFulfilled,
      (state, { payload }) => {
        state.brandName = payload.brandName;
      }
    );
  },
});

export const { setBrandName } = navSlice.actions;
export default navSlice.reducer;
