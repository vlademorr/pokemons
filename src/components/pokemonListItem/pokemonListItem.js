import React from "react";
import "./pokemonListItem.css";

const PokemonListItem = ({pokemon, pokemonDetails}) => {
    return (
        <div
            className="pokemon_container"
            onClick={() => pokemonDetails(pokemon)}
        >
            <img
                className="pokemon_list_img"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            <p className="pokemon_name">{pokemon.name}</p>
            <div className="types">
                {
                    pokemon.types.map(({type}) => {
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