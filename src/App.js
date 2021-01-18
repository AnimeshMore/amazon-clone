
import './App.css';
import Header from "./Header.js";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
    <Header />

      <Switch>
       <Route path="/checkout">
      
      <Checkout />
      </Route> 
      <Route path="/">
      
      <Home />
      </Route> 
    </Switch>
     </div>
    </Router>
  );
}

export default App;
