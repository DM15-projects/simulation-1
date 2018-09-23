import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("/api/inventory").then(response => {
      // console.log(response);
      this.setState({
        products: response.data
      });
    });
  }

  render() {
    // let productsDisplay = this.state.products.map((product, ind) => {
    //   return (
    //     <div key={product.id}>
    //       <img src={product.image_url} width="60" height="80" />
    //       <p>{product.name}</p>
    //       <p>${product.price}</p>
    //       {/* <p>{product.image_url}</p> */}
    //     </div>
    //   );
    // });
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <NavBar />
          <Dashboard
            products={this.state.products}
            getInventory={this.componentDidMount}
          />
          <Form getInventory={this.componentDidMount} />
          {/* {productsDisplay} */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
