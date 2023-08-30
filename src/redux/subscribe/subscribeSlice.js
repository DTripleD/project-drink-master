import { createSlice } from '@reduxjs/toolkit';
import { fetchSubscribe } from './operations';
import { toast } from 'react-hot-toast';

const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState: {
        subscription: null,
        isLoading: false,
        error: "",
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSubscribe.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSubscribe.fulfilled, (state, action) => {
                state.isLoading = false;
                toast.success("Thank you for subscribing to our news.");
            })
            .addCase(fetchSubscribe.rejected, (state, action) => {
                state.isRefreshing = false;
                toast.error(action.payload);
            })
    },
});

export const subscribeReducer = subscribeSlice.reducer;