import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: []
    // };
  }

  // componentDidMount() {
  //   axios.get("/api/products").then(response => {
  //     console.log(response);
  //     this.setState({
  //       products: response.data
  //     });
  //   });
  // }

  render() {
    let productsDisplay = this.props.products.map((product, ind) => {
      return (
        <div key={product.id}>
          <img src={product.image_url} width="60" height="80" />
          <p>{product.name}</p>
          <p>${product.price}</p>
          {/* <p>{product.image_url}</p> */}
        </div>
      );
    });
    return (
      <div className="dashboardmain">
        Dashboard
        {productsDisplay}
        <Product />
      </div>
    );
  }
}

export default Dashboard;
