import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPokemons} from "../../actions";
import PokemonsList from "./pokemonsList";

const PokemonsListContainer = ({fetchPokemons, pokemons, loading, loadNewItems}) => {
    useEffect(() => {
        fetchPokemons(loadNewItems);
    }, [loadNewItems]);

    return <PokemonsList pokemons={pokemons} loading={loading}/>;
};

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        loading: state.loading,
        loadNewItems: state.loadNewItems
    };
};

const mapDispatchToProps = {
    fetchPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsListContainer);