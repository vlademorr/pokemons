import React from 'react';
import {Button} from "react-bootstrap";
import Spinner from "../spinner/spinner";

const BtnLoadMore = ({loadMore, loadingBtnLoadMore, loadNewItems, loadingIndicatorLoadMore}) => {
    if (loadingBtnLoadMore) {
        return (
            <Button
                className="btn_load_more"
                variant="primary"
            >
                <Spinner/>
            </Button>
        )
    }
    return (
        <Button
            className="btn_load_more"
            variant="primary"
            onClick={() => {
                loadMore(loadNewItems);
                loadingIndicatorLoadMore()
            }}
        >
            Load More
        </Button>
    );
};


export default BtnLoadMore;