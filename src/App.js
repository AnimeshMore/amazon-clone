
import './App.css';
import Header from "./Header.js";
import Home from "./Home";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;