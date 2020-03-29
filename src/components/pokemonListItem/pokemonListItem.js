import React from "react";
import "./pokemonListItem.css";

const PokemonListItem = ({pokemon, pokemonDetails}) => {
    return (
        <div
            className="pokemon_container"
            onClick={() => pokemonDetails(pokemon.data)}
        >
            <img
                className="pokemon_list_img"
                src={pokemon.data.sprites.front_default}
                alt={pokemon.data.name}
            />
            <p className="pokemon_name">{pokemon.data.name}</p>
            <div className="types">
                {
                    pokemon.data.types.map(({type}) => {
                        return (
                            <div key={type.name} className={`${type.name} type`}>
                                {type.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PokemonListItem;