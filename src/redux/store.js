import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import pageReducer from "./pageSlice";
import editCardReducer from "./editCardSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        page: pageReducer,
        editCard: editCardReducer,
    },
});

export default store;
