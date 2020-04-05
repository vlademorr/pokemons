import React from "react";
import {connect} from "react-redux";
import PokemonDetails from "./pokemonDetails";

const PokemonDetailsContainer = ({pokemonDetails, loading, showContent}) => {
    return (
        <PokemonDetails pokemonDetails={pokemonDetails} loading={loading} showContent={showContent}/>
    );
};

const mapStateToProps = (state) => {
    return {
        pokemonDetails: state.pokemonDetails,
        loading: state.loading,
        showContent: state.showContent
    };
};

export default connect(mapStateToProps)(PokemonDetailsContainer);