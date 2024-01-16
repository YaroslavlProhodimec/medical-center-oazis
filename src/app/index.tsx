// @ts-ignore
import React, { FC, ReactElement } from "react";

import "../shared/styles/globals.scss";
import { Provider } from "react-redux";
import "./styles/index.scss";
import { store } from "./store";
import { Router } from "../pages";


const App: FC = (): ReactElement => {
    return (
    <Provider store={store}>

                <Router />
        </Provider>
    );
};

export { App };
