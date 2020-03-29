import React from "react";
import "./pokemonDetails.css";

const PokemonDetails = ({pokemonDetails, loading}) => {
    if (loading) {
        return null
    }

    if (!pokemonDetails) {
        return <h3 className="details_help">Choose Pokemon To See Details</h3>
    }
    return (
        <div className="pokemon_details_container">
            <img
                className="pokemon_front_details_img"
                src={pokemonDetails.sprites.front_default}
                alt={pokemonDetails.name}
            />
            <img
                className="pokemon_back_details_img"
                src={pokemonDetails.sprites.back_default}
                alt={pokemonDetails.name}
            />
            <h5 className="pokemon_details_name">{pokemonDetails.name} #{pokemonDetails.id}</h5>
            <table className="table_pokemon_details">
                <tbody>
                <tr>
                    <td>types</td>
                    <td>
                        {
                            pokemonDetails.types.map(({type}) => {
                                return (type.name + " ")
                            })
                        }
                    </td>
                </tr>
                {
                    pokemonDetails.stats.map((stat) => {
                        return (
                            <tr key={stat.base_stat + stat.stat.name}>
                                <td>
                                    {stat.stat.name}
                                </td>
                                <td>
                                    {stat.base_stat}
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td>total moves</td>
                    <td>{pokemonDetails.moves.length}</td>
                </tr>
                <tr>
                    <td>weight</td>
                    <td>{pokemonDetails.weight}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PokemonDetails;