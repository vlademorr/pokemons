import axios from "axios";

export default class PokemonsService {
    getPokemons(loadNewItems = 0) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${loadNewItems}`)
    }
    getTypes() {
        return axios.get('https://pokeapi.co/api/v2/type?limit=999')
    }
    getPokemonsByType(pokemonsByTypeUrl){
        return axios.get(pokemonsByTypeUrl)
    }
}
