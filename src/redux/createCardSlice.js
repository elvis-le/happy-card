import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imageIndex: 0,
    showPassword: false,
    musicName: "",
    musicSrc: null,
    currentPage: 0,
    activePage: "titlePage",
};

const createCardSlice = createSlice({
    name: "createCard",
    initialState,
    reducers: {
        setImageIndex: (state, action) => {
            state.imageIndex = action.payload;
        },
        toggleShowPassword: (state) => {
            state.showPassword = !state.showPassword;
        },
        setMusic: (state, action) => {
            state.musicName = action.payload.name;
            state.musicSrc = action.payload.src;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        },
        nextImage: (state) => {
                state.imageIndex += 1;
        },
        prevImage: (state) => {
                state.imageIndex -= 1;
        },
    }
});

export const { setImageIndex, toggleShowPassword,
    setMusic, setCurrentPage,
    setActivePage,
 nextImage, prevImage} = createCardSlice.actions;
export default createCardSlice.reducer;
