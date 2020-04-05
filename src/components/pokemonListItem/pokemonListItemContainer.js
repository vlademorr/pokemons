import React from "react";
import {connect} from "react-redux";
import {pokemonDetails} from "../../actions/pokemonsActions";
import PokemonListItem from "./pokemonListItem";

const PokemonListItemContainer = ({pokemon, pokemonDetails}) => {
    return (
        <PokemonListItem pokemon={pokemon} pokemonDetails={pokemonDetails}/>
    );
};

const mapDispatchToProps = {
    pokemonDetails
};

export default connect(null, mapDispatchToProps)(PokemonListItemContainer);