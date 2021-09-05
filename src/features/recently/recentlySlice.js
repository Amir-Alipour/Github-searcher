import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


const recentlyAdapter = createEntityAdapter();

export const {
    selectAll: selectAllRecently,
    selectById: selectRecentlyById,
    selectIds: selectRecentlyIds,
} = recentlyAdapter.getSelectors((state) => state.recently);

const initialState = recentlyAdapter.getInitialState({
    status: "idle",
    error: null,
});

const recentlySlice = createSlice({
    name: "recently",
    initialState,
    reducers: {
        addRecently: (state, action) => {
            state.entities[action.payload.node_id] = action.payload;
            state.ids.push(action.payload.node_id);
        }
    },
    extraReducers: {},
});

export const {addRecently} = recentlySlice.actions;

export default recentlySlice.reducer;
