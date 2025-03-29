import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import pageReducer from "./pageSlice";
import editCardReducer from "./editCardSlice";
import createCardReducer from "./createCardSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        page: pageReducer,
        editCard: editCardReducer,
        createCard: createCardReducer,
    },
});

export default store;
