import PokemonsService from "../services/pokemons-service";
import axios from "axios";

const { getPokemons } = new PokemonsService();

const fetchPokemons = (loadNewItems) => {
    return (dispatch) => {
        if (!loadNewItems) {
            dispatch(fetchPokemonsRequest());
        }
        getPokemons(loadNewItems)
            .then(({ data }) => data)
            .then(pokemons => {
                const promise = [];
                pokemons.results.forEach(el => promise.push(axios.get(el.url)
                    .then(({data}) => data)
                ));
                Promise.all([...promise])
                    .then(pokemons => dispatch(getPokemonsSuccessAction(pokemons)))
            })
            .catch(err => dispatch(getPokemonsFailureAction(err)))
    };
};

const fetchPokemonsRequest = () => {
    return {
        type: "FETCH_POKEMONS_REQUEST"
    }
};

const getPokemonsSuccessAction = pokemons => {
    return {
        type: "FETCH_POKEMONS_SUCCESS",
        payload: pokemons
    };
};

const getPokemonsFailureAction = error => {
    return {
        type: "FETCH_POKEMONS_FAILURE",
        payload: error
    };
};

const pokemonDetails = (pokemon) => {
    return {
        type: "POKEMON_DETAILS",
        payload: pokemon
    };
};

export {
    fetchPokemons,
    pokemonDetails
}