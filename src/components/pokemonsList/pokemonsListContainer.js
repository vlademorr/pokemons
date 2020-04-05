import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPokemons} from "../../actions/pokemonsActions";
import {loadMorePokemonsByTypeAction} from "../../actions/typeFilterActions";
import PokemonsList from "./pokemonsList";

const PokemonsListContainer = ({fetchPokemons, showContent, pokemons, loading, loadNewItems, pokemonsByTypeUrls, loadMorePokemonsByTypeAction}) => {
    useEffect(() => {
        if(pokemonsByTypeUrls.length) {
            loadMorePokemonsByTypeAction(loadNewItems, pokemonsByTypeUrls);
            return;
        }
        fetchPokemons(loadNewItems);
    }, [loadNewItems, pokemonsByTypeUrls, fetchPokemons, loadMorePokemonsByTypeAction]);

    return <PokemonsList pokemons={pokemons} loading={loading} showContent={showContent}/>;
};

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        loading: state.loading,
        loadNewItems: state.loadNewItems,
        pokemonsByTypeUrls: state.pokemonsByTypeUrls,
        showContent: state.showContent
    };
};

const mapDispatchToProps = {
    fetchPokemons,
    loadMorePokemonsByTypeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsListContainer);