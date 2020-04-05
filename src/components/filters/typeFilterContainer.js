import React from "react";
import {connect} from "react-redux";
import {typeFilterAction, filterListByTypeAction} from "../../actions/typeFilterActions";
import TypeFilter from "./typeFilter";

const TypeFilterContainer = ({types, pokemonsByTypeUrls, typeFilterAction, filterListByTypeAction}) => {
    return <TypeFilter
        types={types}
        pokemonsByTypeUrls={pokemonsByTypeUrls}
        typeFilterAction={typeFilterAction}
        filterListByTypeAction={filterListByTypeAction}
    />
};

const mapStateToProps = (state) => {
    return{
        types: state.types,
        pokemonsByTypeUrls: state.pokemonsByTypeUrls,
    }
};

const mapDispatchToProps = {
    typeFilterAction,
    filterListByTypeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilterContainer);
