import { configureStore } from "@reduxjs/toolkit";
import LoaderReducer from "../Reducers/LoaderReducer";

const Store=configureStore({
    reducer:{
        loaderReducer:LoaderReducer,
    }
})
export default Store;