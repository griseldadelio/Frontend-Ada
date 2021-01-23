import React from 'react'
import { Contact, Home, Login, Offers, Shop } from './screens';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/offers" component={Offers} />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

