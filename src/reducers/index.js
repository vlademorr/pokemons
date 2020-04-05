const initialState = {
    pokemons: [],
    showContent: false,
    types: [],
    loading: true,
    error: null,
    pokemonDetails: null,
    loadNewItems: 0,
    pokemonsByTypeUrls: [],
    loadingBtnLoadMore: true,
    showLoadMoreBtn: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POKEMONS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
                pokemonDetails: null
            };
        case "FETCH_POKEMONS_BY_TYPE_REQUEST":
            return {
                ...state,
                pokemons: [],
                loading: true,
                error: null
            };
        case "FETCH_POKEMONS_SUCCESS":
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload),
                showContent: true,
                loading: false,
                loadingBtnLoadMore: false,
                showLoadMoreBtn: action.payload.length === 12
            };
        case "FETCH_POKEMONS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "FETCH_POKEMONS_BY_TYPE_SUCCESS":
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload),
                showContent: true,
                loading: false,
                loadingBtnLoadMore: false,
                showLoadMoreBtn: action.payload.length === 12
            };
        case "CLEAR_FILTER_ACTION":
            return {
                ...state,
                pokemons: [],
                pokemonsByTypeUrls: [],
                showContent: true,
                loading: false,
                loadingBtnLoadMore: false,
            };
        case "GET_URLS_BY_TYPE":
            return {
                ...state,
                loadNewItems: 0,
                pokemonDetails: null,
                pokemonsByTypeUrls: action.payload,
                showLoadMoreBtn: !!action.payload.length
            };
        case "FETCH_TYPES_SUCCESS":
            return {
                ...state,
                types: action.payload
            };
        case "FETCH_TYPES_FAILURE":
            return {
                ...state,
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
                loadingBtnLoadMore: true
            };
        case "DISABLE_LOAD_MORE_BTN":
            return {
                ...state,
                showLoadMoreBtn: false
            };
        case "NO_CONTENT":
            return {
                ...state,
                showContent: false,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
