import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import brandNameReducer from '../features/brandName/brandNameSlice';
import bodyReducer from '../features/body/bodySlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    brandName: brandNameReducer,
    body: bodyReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

// Fetch initial state
store.dispatch(apiSlice.endpoints.getInitialState.initiate());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
