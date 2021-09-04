import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import {fetchSuggest} from './suggestAction';

const suggestAdapter = createEntityAdapter();

export const {
    selectAll: selectAllSuggest,
    selectById: selectSuggestById,
    selectIds: selectSuggestIds,
} = suggestAdapter.getSelectors((state) => state.suggest);

const initialState = suggestAdapter.getInitialState({
    status: "idle",
    error: null,
});

const suggestSlice = createSlice({
    name: "suggest",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSuggest.pending]: (state) => {
            state.status = "loading"
        },
        [fetchSuggest.fulfilled]: (state, action) => {
            suggestAdapter.upsertMany(state, action.payload);
            state.status = "success";
        }
    },
});


export default suggestSlice.reducer;
