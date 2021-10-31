import logo from "./logo.svg";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddServices from "./Pages/AddServices/AddServices";
import MyOrders from "./Pages/MyOrders/MyOrders";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header/Header";
import Login from "./Pages/Login/Login";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import UpdateService from "./Pages/UpdateService/UpdateService";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/updateservice/:id">
            <UpdateService></UpdateService>
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
