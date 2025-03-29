import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        currentPage: "home",
        formData: {},
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        saveFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
    },
});

export const { setCurrentPage, saveFormData } = pageSlice.actions;
export default pageSlice.reducer;
