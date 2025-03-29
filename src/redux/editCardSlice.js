import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    sender: "",
    receiver: "",
    pages: [""],
    currentPage: 0,
    activePage: "titlePage",
};

const editCardSlice = createSlice({
    name: "editCard",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setSender: (state, action) => {
            state.sender = action.payload;
        },
        setReceiver: (state, action) => {
            state.receiver = action.payload;
        },
        addPage: (state) => {
            state.pages.push("");
            state.currentPage = state.pages.length - 1;
        },
        updateCurrentPageContent: (state, action) => {
            state.pages[state.currentPage] = action.payload;
        },
        removePage: (state) => {
            if (state.pages.length > 1) {
                state.pages.splice(state.currentPage, 1);
                state.currentPage = Math.max(0, state.currentPage - 1);
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 0) state.currentPage -= 1;
        },
        nextPage: (state) => {
            if (state.currentPage < state.pages.length - 1) state.currentPage += 1;
        },
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        },
        goToCreateCard: (state) => {
            console.log("Navigating to CreateCard with data:", state);
        },
    },
});

export const {
    setTitle, setSender, setReceiver,
    addPage, updateCurrentPageContent, removePage,
    prevPage, nextPage, setActivePage, goToCreateCard
} = editCardSlice.actions;

export default editCardSlice.reducer;
