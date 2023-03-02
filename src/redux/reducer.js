import { createReducer } from "@reduxjs/toolkit"
import { moviesFetching, moviesFetched, moviesFetchingError, categoryFetching, categoryFetched, categoryFetchingError, sliderFetching, sliderFetched, sliderFetchingError, moviesByCategory } from "./actions"

const initialState = {
    movies: [
        
    ],
    moviesPages: "",
    moviesLoadingStatus: "none",

    category: [
        
    ],
    categoryLoadingStatus: "none",


    sliders: [

    ],
    slidersFetchingStatus: "none",

    byCategory: [

    ],
    byCategoryLoadingStatus: "loading"
}

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(moviesFetching, (state, action) => {state.moviesLoadingStatus = "loading"})
        .addCase(moviesFetched, (state, action) => {
            state.movies = action.payload.data,
            state.moviesPages = action.payload.pages
            state.moviesLoadingStatus = "none"
        })
        .addCase(moviesFetchingError, (state, action) => {state.moviesLoadingStatus = "error"})

        .addCase(categoryFetching, (state, action) => {state.categoryLoadingStatus = "loading"})
        .addCase(categoryFetched, (state, action) => {
            state.category = action.payload
            state.categoryLoadingStatus = "none"
        })
        .addCase(categoryFetchingError, (state, action) => {state.categoryLoadingStatus = "error"})
        
        .addCase(sliderFetching, (state, action) => {state.slidersFetchingStatus = "loading"})
        .addCase(sliderFetched, (state, action) => {
            state.sliders = action.payload,
            state.slidersFetchingStatus = "none"
        })
        .addCase(sliderFetchingError, (state, action) => {state.slidersFetchingStatus = "error"})

        .addCase(moviesByCategory, (state, action) => {
            state.byCategory = [...state.byCategory, action.payload],
            state.byCategoryLoadingStatus = "none"
        })

        .addDefaultCase(() => {})
})

export default reducer