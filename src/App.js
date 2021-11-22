// import logo from './logo.svg';
import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
// import Posts from "./components/posts";
import Albums from "./components/albums";
import Register from "./components/register";
import Coder from "./components/coder";
import CoderForm from "./components/coderform";
import PageNotFound from "./components/pageNotFound";
import UpdateCoder from "./components/updatecoder";
import BillPayment from "./components/billpayment";
import BillPaymentForm from "./components/billpaymentform";

import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/albums" component={Albums} />
        <Route path="/login" component={Login} />
        <Route path="/coder" component={Coder} />
        <Route path="/coders/add" component={CoderForm} />
        <Route path="/bp" component={BillPayment} />
        <Route path="/bps/add" component={BillPaymentForm} />
        <Route path="/register" component={Register} />
        <Route path="/coders/update/:cid" component={UpdateCoder} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
