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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVIES_FETCHING":
            return {
                ...state,
                moviesLoadingStatus: "loading"
            }
        case "MOVIES_FETCHED":
            return {
                ...state,
                movies: action.payload,
                moviesLoadingStatus: "none"
            }
        case "MOVIES_FETCHING_ERROR":
            return {
                ...state,
                moviesLoadingStatus: "error"
            }
        default:
            return state
            break;
    }
}

export default reducer