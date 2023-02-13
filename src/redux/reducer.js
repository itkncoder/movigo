import { createReducer } from "@reduxjs/toolkit"
import { moviesFetching, moviesFetched, moviesFetchingError } from "./actions"

const initialState = {
    movies: [
        
    ],
    moviesLoadingStatus: "none",
    category: [
        {
            name: "FILMS"
        },
        {
            name: "POPULAR"
        },
        {
            name: "CARTOONS"
        },
        {
            name: "ANIME"
        },
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
        .addDefaultCase(() => {})
})

export default reducer