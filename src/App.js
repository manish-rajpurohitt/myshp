import "./styles.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import LoginPage from "./components/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
    </Router>
  );
}