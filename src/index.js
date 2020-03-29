import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import App from "./components/app/app";

import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById("root")
);
