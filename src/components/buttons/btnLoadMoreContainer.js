import React from 'react';
import {connect} from 'react-redux';
import {loadMore, loadingIndicatorLoadMore} from "../../actions";
import BtnLoadMore from "./btnLoadMore";

const BtnLoadMoreContainer = ({loadMore, loadingLoadMore, loadNewItems, loadingIndicatorLoadMore}) => {
    return (
        <BtnLoadMore
            loadMore={loadMore}
            loadingLoadMore={loadingLoadMore}
            loadNewItems={loadNewItems}
            loadingIndicatorLoadMore={loadingIndicatorLoadMore}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        loadNewItems: state.loadNewItems,
        loadingLoadMore: state.loadingLoadMore
    };
};

const mapDispatchToProps = {
    loadMore,
    loadingIndicatorLoadMore
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnLoadMoreContainer);