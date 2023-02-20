import { createReducer } from "@reduxjs/toolkit"
import { moviesFetching, moviesFetched, moviesFetchingError, categoryFetching, categoryFetched, categoryFetchingError, filtered } from "./actions"

const initialState = {
    movies: [
        
    ],
    moviesLoadingStatus: "none",


    category: [
        
    ],
    categoryLoadingStatus: "none",


    filteredMovies: [

    ]
}

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(moviesFetching, (state, action) => {state.moviesLoadingStatus = "loading"})
        .addCase(moviesFetched, (state, action) => {
            state.movies = action.payload,
            state.moviesLoadingStatus = "none"
        })
        .addCase(moviesFetchingError, (state, action) => {state.moviesLoadingStatus = "error"})

        .addCase(categoryFetching, (state, action) => {state.categoryLoadingStatus = "loading"})
        .addCase(categoryFetched, (state, action) => {
            state.category = action.payload
            state.categoryLoadingStatus = "none"
        })
        .addCase(categoryFetchingError, (state, action) => {state.categoryLoadingStatus = "error"})
        .addCase(filtered, (state, action) => {
            state.filteredMovies = action.payload
        })

        .addDefaultCase(() => {})
})

export default reducer