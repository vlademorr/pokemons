import React from 'react';
import {connect} from 'react-redux';
import {loadMore, loadingIndicatorLoadMore} from "../../actions/loadMoreBtnActions";
import BtnLoadMore from "./btnLoadMore";

const BtnLoadMoreContainer = ({
    loadMore,
    showLoadMoreBtn,
    loadingBtnLoadMore,
    loadNewItems,
    loadingIndicatorLoadMore
}) => {
    return showLoadMoreBtn ? (
        <BtnLoadMore
            loadMore={loadMore}
            loadNewItems={loadNewItems}
            loadingBtnLoadMore={loadingBtnLoadMore}
            loadingIndicatorLoadMore={loadingIndicatorLoadMore}
        />
    ) : null;
};

const mapStateToProps = (state) => {
    return {
        loadNewItems: state.loadNewItems,
        loadingBtnLoadMore: state.loadingBtnLoadMore,
        showLoadMoreBtn: state.showLoadMoreBtn
    };
};

const mapDispatchToProps = {
    loadMore,
    loadingIndicatorLoadMore
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnLoadMoreContainer);