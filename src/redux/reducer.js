const initialState = {
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
    ],
    movies: [
        {
            img: "https://picsum.photos/600",
            name: "Happy birthday without me, without KNCoder",
            link: '/watch',
            premium: "premium"
        },
        {
            img: "https://picsum.photos/300",
            name: "Dune / Dune part one, new films",
            link: '/watch',
            premium: "premium"
        },{
            img: "https://picsum.photos/400",
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: "https://picsum.photos/500",
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: "https://picsum.photos/700",
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: "https://picsum.photos/800",
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: "https://picsum.photos/1000",
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: "https://picsum.photos/200",
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: "https://picsum.photos/1200",
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
            break;
    }
}

export default reducer