const loadMore = (items) => {
    return {
        type: "LOAD_MORE_ITEMS",
        payload: items + 12
    };
};

const loadingIndicatorLoadMore = () => {
    return {
        type: "LOADING_INDICATOR_LOAD_MORE"
    };
};

export {
    loadMore,
    loadingIndicatorLoadMore,
}