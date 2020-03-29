import React from "react";
import PokemonsList from "../pokemonsList/pokemonsListContainer";
import PokemonDetails from "../pokemonDetails/pokemonDetailsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
    return (
        <>
            <div className="header">
                <h1>Pokedex</h1>
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

export default App;