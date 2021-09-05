import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import {fetchProfile} from './profileActions'

const profileAdapter = createEntityAdapter();

export const {
    selectAll: selectProfile,
} = profileAdapter.getSelectors((state) => state.profile);

const initialState = profileAdapter.getInitialState({
    profile: {},
    status: "idle",
    error: null,
});

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProfile.pending]: (state) => {
            state.status = "loading";
        },
        [fetchProfile.fulfilled]: (state, action) => {
            state.profile = action.payload;
            state.status = "success";
            state.error = false;
        },
        [fetchProfile.rejected]: state => {
            state.error = true
        }
    },
});


export default profileSlice.reducer;
