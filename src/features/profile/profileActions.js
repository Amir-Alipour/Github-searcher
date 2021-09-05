import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../utils/AxiosConfig';

export const fetchProfile = createAsyncThunk("profile/fetchProfile" , async (username) => {
    return await Api.get(`/users/${username}`);
});