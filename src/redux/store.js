import {configureStore} from "@reduxjs/toolkit";
import  userReducer from "./slices/userSlice.js"
import  categoriesReducer from "./slices/categoriesSlice.js"

const store = configureStore({
    reducer: {
        userReducer,
        categoriesReducer
    }
})


export default store