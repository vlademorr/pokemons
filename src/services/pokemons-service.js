import axios from "axios";

export default class PokemonsService {
    getPokemons(loadNewItems) {
        if (loadNewItems) {
            return axios.get(`http://pokeapi.co/api/v2/pokemon/?limit=12&offset=${loadNewItems}`)
        }
        return axios.get('http://pokeapi.co/api/v2/pokemon/?limit=12')
    }
}
