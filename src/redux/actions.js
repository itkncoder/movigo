import { createAction } from "@reduxjs/toolkit"

export const moviesFetching = createAction("MOVIES_FETCHING")
export const moviesFetched = createAction("MOVIES_FETCHED")
export const moviesFetchingError = createAction("MOVIES_FETCHING_ERROR")

export const categoryFetching = createAction("CATEGORY_FETCHING")
export const categoryFetched = createAction("CATEGORY_FETCHED")
export const categoryFetchingError = createAction("CATEGORY_FETCHING_ERROR")

export const sliderFetching = createAction("SLIDER_FETCHING")
export const sliderFetched = createAction("SLIDER_FETCHED")
export const sliderFetchingError = createAction("SLIDER_FETCHING_ERROR")

export const moviesByCategory = createAction("HOME_SWIPER")