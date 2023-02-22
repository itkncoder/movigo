import { createAction } from "@reduxjs/toolkit"

export const moviesFetching = createAction("MOVIES_FETCHING")
export const moviesFetched = createAction("MOVIES_FETCHED")
export const moviesFetchingError = createAction("MOVIES_FETCHING_ERROR")

export const categoryFetching = createAction("CATEGORY_FETCHING")
export const categoryFetched = createAction("CATEGORY_FETCHED")
export const categoryFetchingError = createAction("CATEGORY_FETCHING_ERROR")

export const filtered = createAction("FILTERED")