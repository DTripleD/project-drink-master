
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import instance from "../../shared/api/instance";

export const fetchSubscribe = createAsyncThunk('/auth/subscribe', async (email, thunkAPI) => {
    try {
        const resp = await instance.post(`/subscribe`, email);
        return resp.data;
    } catch (error) {
        toast.error('Something wrong. Try again.');
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});
