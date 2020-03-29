import React from "react";
import {connect} from "react-redux";
import PokemonDetails from "./pokemonDetails";

const PokemonDetailsContainer = ({pokemonDetails, loading}) => {
    return (
        <PokemonDetails pokemonDetails={pokemonDetails} loading={loading}/>
    );
};

const mapStateToProps = (state) => {
    return {
        pokemonDetails: state.pokemonDetails,
        loading: state.loading
    };
};

export default connect(mapStateToProps)(PokemonDetailsContainer);