import './app.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Dashboard, Products, Users } from './Screens';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;