import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../utils/AxiosConfig';

export const fetchSuggest = createAsyncThunk("suggest/fetchSuggest" , async () => {
    return await Api.get("/users");
});