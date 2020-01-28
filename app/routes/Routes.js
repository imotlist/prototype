import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

//import the smart/container component

import Auth from 'app/pages/Auth'
import Home from 'app/pages/Home'
import Dashboard from 'app/component/Dashboard'
import Server from 'app/pages/Server'

export const Routes = () => (
    <Router>
        <Stack key="root" hideNavBar>
            <Scene key="auth" initial component={Auth} />
            <Scene key="home" component={Home} />
            <Scene key="dashboard" component={Dashboard} />
            <Scene key="server" component={Server} />
        </Stack>
    </Router>
)