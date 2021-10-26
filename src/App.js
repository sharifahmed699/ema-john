import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Register from './components/Register/Register';
import SearchResult from './components/SearchResult/SearchResult';
import Shop from './components/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <PrivateRoute path="/placeorder">
                <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/search">
              <SearchResult></SearchResult>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch> 
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
