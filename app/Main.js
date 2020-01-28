import React, { Component } from 'react'
//import redux && devtool (store & debugger)
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from "app/redux/reducer";

//import theme
import { StyleProvider } from 'native-base';
import getTheme from 'native-base-theme/components';  
import theme from "native-base-theme/variables/material";

//import routes
import {Routes} from "app/routes/Routes"

const Main = () => {
    const store = createStore(rootReducer, devToolsEnhancer());
    
    return(
        <Provider store={store}>
            <StyleProvider style={getTheme()}>
                <Routes/>
            </StyleProvider>
        </Provider>
    )
}

export default Main