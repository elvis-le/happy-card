import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 0,
    activePage: "titlePage",
    musicName: "",
    musicSrc: null,
    showPassword: false,
    password: "",
    images: ["https://picsum.photos/200/300?random=1", "https://picsum.photos/200/300?random=2", "https://picsum.photos/200/300?random=3", "https://picsum.photos/200/300?random=4", "https://picsum.photos/200/300?random=5", "https://picsum.photos/200/300?random=6", "https://picsum.photos/200/300?random=7", "https://picsum.photos/200/300?random=8", "https://picsum.photos/200/300?random=9"],
    selectedImageIndex: 0,

};

const createCardSlice = createSlice({
    name: "createCard",
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        },
        setMusic: (state, action) => {
            state.musicName = action.payload.name;
            state.musicSrc = action.payload.src;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        toggleShowPassword: (state) => {
            state.showPassword = !state.showPassword;
        },
        setImageIndex: (state, action) => {
            state.selectedImageIndex = action.payload;
        },
        prevImage: (state) => {
            if (state.selectedImageIndex > 0) {
                state.selectedImageIndex -= 1;
            }
        },
        nextImage: (state) => {
            if (state.selectedImageIndex < state.images.length - 1) {
                state.selectedImageIndex += 1;
            }
        },
        goToCreateCard: (state) => {
            console.log("Navigating to CreateCard with data:", state);
        },
    },
});

export const {
    setTitle, setSender, setReceiver,
    setActivePage, goToCreateCard,
    setMusic, setPassword, toggleShowPassword,
    setImageIndex, prevImage, nextImage
} = createCardSlice.actions;

export default createCardSlice.reducer;
