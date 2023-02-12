export const moviesFetching = () => ({type: "MOVIES_FETCHING"})
export const moviesFetched = (movies) => ({type: "MOVIES_FETCHED", payload: movies})
export const moviesFetchingError = () => ({type: "MOVIES_FETCHING_ERROR"})