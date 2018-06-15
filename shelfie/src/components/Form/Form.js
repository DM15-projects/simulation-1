import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInput: "",
      nameInput: "",
      priceInput: 0,
      products: []
    };

    this.imageHandler = this.imageHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  imageHandler(e) {
    this.setState({
      imageInput: e.target.value
    });
  }

  nameHandler(e) {
    this.setState({
      nameInput: e.target.value
    });
  }

  priceHandler(e) {
    this.setState({
      priceInput: e.target.value
    });
  }

  handleCancel() {
    this.setState({
      imageInput: "",
      nameInput: "",
      priceInput: 0
    });
  }

  addHandler(name, price, image) {
    axios.post("/api/product", { name, price, image });
    this.props.getInventory();
    this.setState({
      imageInput: "",
      nameInput: "",
      priceInput: 0
    });
  }

  render() {
    return (
      <div className="mainform">
        Form
        <input
          value={this.state.imageInput}
          onChange={e => this.imageHandler(e)}
          placeholder="Enter image URL"
        />
        {/* <p>{this.state.imageInput}</p> */}
        <input
          value={this.state.nameInput}
          onChange={e => this.nameHandler(e)}
          placeholder="Enter name"
        />
        {/* <p>{this.state.nameInput}</p> */}
        <input
          value={this.state.priceInput}
          onChange={e => this.priceHandler(e)}
          placeholder="Enter price"
        />
        {/* <p>{this.state.priceInput}</p> */}
        <button onClick={() => this.handleCancel()}>Cancel</button>
        {/* cancel btn should clear all input boxes */}
        <button
          onClick={() =>
            this.addHandler(
              this.state.nameInput,
              this.state.priceInput,
              this.state.imageInput
            )
          }
        >
          Add to Inventory
        </button>
        {/* add btn should add to inventory */}
        {/* should post to database */}
        {/* should also clear input boxes */}
      </div>
    );
  }
}

export default Form;
