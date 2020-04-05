import React from "react";
import {connect} from 'react-redux';
import PokemonsList from "../pokemonsList/pokemonsListContainer";
import PokemonDetails from "../pokemonDetails/pokemonDetailsContainer";
import TypeFilter from "../filters/typeFilterContainer";
import {clearFilterAction} from "../../actions/typeFilterActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = ({clearFilterAction}) => {
    return (
        <>
            <div className="header">
                <h1 className="title" onClick={clearFilterAction}>Pokedex</h1>
                <TypeFilter />
            </div>
            <div className="container">
                <div className="left_side">
                    <PokemonsList/>
                </div>
                <div className="right_side">
                    <PokemonDetails/>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = {
    clearFilterAction
};

export default connect(null, mapDispatchToProps)(App);