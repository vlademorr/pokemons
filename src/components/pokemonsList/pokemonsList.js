import React from 'react';
import PokemonListItem from "../pokemonListItem/pokemonListItemContainer";
import BtnLoadMore from "../buttons/btnLoadMoreContainer";
import {Row, Col} from "react-bootstrap";
import Spinner from "../spinner/spinner";
import "./pokemonsList.css";

const PokemonsList = ({pokemons, loading}) => {
    if (loading) {
        return <Spinner/>
    }
    return (
        <>
            <Row as="ul" className="pokemons_list">
                {
                    (pokemons).map((pokemon) => {
                        return (
                            <Col as="li" xl={4} lg={6} md={6} sm={12} xs={12} key={pokemon.data.id}>
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