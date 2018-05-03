import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import routes from "./routes";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
