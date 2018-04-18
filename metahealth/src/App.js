import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import routes from "./routes";
import Header from "./components/Header/Header";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">


      <div>{routes}</div>

      </div>
    );
  }
}

export default App;
