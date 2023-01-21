import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const GET_GREETING = 'GET_GREETING';

const initialState = {
  randomGreeting: '',
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Thunks
export const getGreeting = createAsyncThunk(GET_GREETING, async () => {
  try {
    return await api.fetchRandomGreeeting();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getGreeting.fulfilled, (state, action) => ({
        ...state,
        randomGreeting: action.payload,
        status: 'succeeded',
      }))
      .addCase(getGreeting.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const greeting = (state) => state.greeting.randomGreeting;
export const greetingStatus = (state) => state.greeting.status;

export default greetingSlice.reducer;
