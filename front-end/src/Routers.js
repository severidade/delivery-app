import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Components from './pages/Components';
import CostumerProducts from './pages/CostumerProducts';

function Routers() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } exact />
      <Route path="/components" component={ Components } exact />
      <Route path="/custumer/products" component={ CostumerProducts } exact />
    </Switch>
  );
}

export default Routers;
