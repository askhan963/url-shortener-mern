import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { urlInterface } from '../interface/UrlData';
import { urlService } from './urlService';

// Define the URL state interface
interface UrlState {
  data: urlInterface[];
  loading: boolean;
  error: string | null;
}

// Set the initial state for the slice
const initialState: UrlState = {
  data: [],
  loading: false,
  error: null,
};

// Async Thunks using the service
export const fetchUrls = createAsyncThunk('urls/fetchUrls', async () => {
  return await urlService.fetchUrls();
});

export const deleteUrl = createAsyncThunk('urls/deleteUrl', async (id: string) => {
  await urlService.deleteUrl(id);
  return id;
});

export const createUrl = createAsyncThunk('urls/createUrl', async (originalUrl: string) => {
  return await urlService.createUrl(originalUrl);
});

// Create the URL slice
const urlSlice = createSlice({
  name: 'urls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUrls.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUrls.fulfilled, (state, action: PayloadAction<urlInterface[]>) => {
        state.loading = false;
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(fetchUrls.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch URLs';
      })
      .addCase(deleteUrl.fulfilled, (state, action: PayloadAction<string>) => {
        state.data = state.data.filter((item) => item._id !== action.payload);
      })
      .addCase(createUrl.fulfilled, (state, action: PayloadAction<urlInterface>) => {
        state.data.push(action.payload);
      });
  },
});

export default urlSlice.reducer;
