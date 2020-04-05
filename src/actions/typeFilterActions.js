import PokemonsService from "../services/pokemons-service";
import axios from "axios";

const {getTypes, getPokemonsByType} = new PokemonsService();

const filterListByTypeAction = (pokemonByTypeUrl) => {
    return (dispatch) => {
        if (pokemonByTypeUrl === 'clearFilter') {
            return dispatch(clearFilterAction());
        }
        dispatch(fetchPokemonsByTypeRequest());
        getPokemonsByType(pokemonByTypeUrl)
            .then(({data}) => data)
            .then(({pokemon: pokemons}) => {
                if(!pokemons.length){
                    return dispatch(noContentACtion())
                }
                const pokemonsUrls = pokemons.map(({pokemon}) => pokemon.url);
                dispatch(getUrlsByTypeAction(pokemonsUrls));
            })
            .catch(err => dispatch(getPokemonsFailureAction(err)))
    };
};

const loadMorePokemonsByTypeAction = (loadNewItems, pokemonsByTypeUrls) => {
    return (dispatch) => {
        const pokemonsChunk = pokemonsByTypeUrls.slice(loadNewItems, loadNewItems + 12);
        if (!pokemonsChunk.length) {
            return dispatch(disableLoadMoreBtn())
        }
        const promise = [];
        pokemonsChunk.forEach(url => promise.push(axios.get(url)
            .then(({data}) => data)
        ));
        Promise.all([...promise])
            .then(pokemons => {
                dispatch(getPokemonsByTypeSuccessAction(pokemons));
            })
    };
};

const clearFilterAction = () => {
    return {
        type: "CLEAR_FILTER_ACTION"
    }
};

const noContentACtion = () => {
    return {
        type: "NO_CONTENT"
    }
};

const getUrlsByTypeAction = (urls) => {
    return {
        type: "GET_URLS_BY_TYPE",
        payload: urls
    }
};

const typeFilterAction = () => {
    return (dispatch) => {
        getTypes()
            .then(({data}) => data)
            .then(({results}) => {
                dispatch(getTypesSuccessAction(results))
            })
            .catch(err => dispatch(getTypesFailureAction(err)))
    };
};

const getTypesSuccessAction = types => {
    return {
        type: "FETCH_TYPES_SUCCESS",
        payload: types
    };
};

const getTypesFailureAction = error => {
    return {
        type: "FETCH_TYPES_FAILURE",
        payload: error
    };
};

const fetchPokemonsByTypeRequest = () => {
    return {
        type: "FETCH_POKEMONS_BY_TYPE_REQUEST"
    }
};


const getPokemonsByTypeSuccessAction = pokemons => {
    return {
        type: "FETCH_POKEMONS_BY_TYPE_SUCCESS",
        payload: pokemons
    };
};

const getPokemonsFailureAction = error => {
    return {
        type: "FETCH_POKEMONS_FAILURE",
        payload: error
    };
};

const disableLoadMoreBtn = () => {
    return {
        type: "DISABLE_LOAD_MORE_BTN"
    }
};

export {
    typeFilterAction,
    filterListByTypeAction,
    loadMorePokemonsByTypeAction,
    clearFilterAction
}