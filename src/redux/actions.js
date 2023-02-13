import { createAction } from "@reduxjs/toolkit"

export const moviesFetching = createAction("MOVIES_FETCHING")
export const moviesFetched = createAction("MOVIES_FETCHED")
export const moviesFetchingError = createAction("MOVIES_FETCHING_ERROR")