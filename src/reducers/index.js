const initialState = {
    pokemons: [],
    loading: true,
    error: null,
    pokemonDetails: null,
    loadNewItems: 0,
    loadingLoadMore: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POKEMONS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_POKEMONS_SUCCESS":
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload),
                loading: false,
                loadingLoadMore: false
            };
        case "FETCH_POKEMONS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "POKEMON_DETAILS":
            return {
                ...state,
                pokemonDetails: action.payload
            };
        case "LOAD_MORE_ITEMS":
            return {
                ...state,
                loadNewItems: action.payload
            };
        case "LOADING_INDICATOR_LOAD_MORE":
            return {
                ...state,
                loadingLoadMore: true
            };
        default:
            return state;
    }
};

export default reducer;
