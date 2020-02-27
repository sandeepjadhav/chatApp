import React from "react";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SignIn from './screens/SignIn';
import Panel from './screens/Panel';
import PrivateRoute from './components/PrivateRote';
// import io from "socket.io-client";

import './App.css';
let socket;

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <PrivateRoute path="/" component={Panel} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;