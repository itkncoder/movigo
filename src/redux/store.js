import reducer from "./reducer"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: reducer,
    devtools: process.env.NODE_ENV !== "production"
})