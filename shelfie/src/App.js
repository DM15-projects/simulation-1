import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("/api/inventory").then(response => {
      console.log(response);
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
      <div className="App">
        <Header />
        <Dashboard products={this.state.products} />
        <Form getInventory={this.componentDidMount} />
        {/* {productsDisplay} */}
      </div>
    );
  }
}

export default App;
