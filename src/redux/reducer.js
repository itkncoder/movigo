import { createReducer } from "@reduxjs/toolkit"
import { moviesFetching, moviesFetched, moviesFetchingError, categoryFetching, categoryFetched, categoryFetchingError, sliderFetching, sliderFetched, sliderFetchingError, moviesByCategory, fetchAll } from "./actions"

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
    byCategoryLoadingStatus: "loading",
    all: []
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
            state.sliders = state.sliders,
            state.slidersFetchingStatus = "none"
        })
        .addCase(sliderFetchingError, (state, action) => {state.slidersFetchingStatus = "error"})

        .addCase(moviesByCategory, (state, action) => {
            state.byCategory = [...state.byCategory, action.payload],
            state.byCategoryLoadingStatus = state.byCategory.length >= state.category.lengthc ? "none" : "loading"
        })

        .addCase(fetchAll, (state, action) => {state.all = action.payload})

        .addDefaultCase(() => {})
})

export default reducer