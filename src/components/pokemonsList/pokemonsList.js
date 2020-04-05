import React from 'react';
import PokemonListItem from "../pokemonListItem/pokemonListItemContainer";
import BtnLoadMore from "../buttons/btnLoadMoreContainer";
import {Row, Col} from "react-bootstrap";
import Spinner from "../spinner/spinner";
import "./pokemonsList.css";

const PokemonsList = ({pokemons, loading, showContent}) => {
    if (loading) {
        return <Spinner/>
    }
    if (!showContent){
        return <h4>No Content</h4>
    }
    return (
        <>
            <Row as="ul" className="pokemons_list">
                {
                    (pokemons).map((pokemon) => {
                        return (
                            <Col as="li" xl={4} lg={6} md={6} sm={12} xs={12} key={pokemon.id}>
                                <PokemonListItem pokemon={pokemon}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <BtnLoadMore/>
        </>
    );
};

export default PokemonsList;