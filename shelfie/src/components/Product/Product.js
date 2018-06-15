import React, { Component } from "react";

function Product(props) {
  return (
    <div>
      <p>Product Component</p>
    </div>
  );
}

// class Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render(props) {
//     console.log(this.props.myProducts);
//     let myProductsList = this.props.myProducts.map((product, ind) => {
//       return (
//         <div key={product.id}>
//           {/* <div>{product.name}</div>
//           <div>{product.price}</div> */}
//         </div>
//       );
//     });
//     return (
//       <div>
//         <p>test from Product</p>
//         <p>test2 Product</p>
//         {/* <p>{this.props.myProducts[1].name}</p> */}
//         {myProductsList}
//       </div>
//     );
//   }
// }

export default Product;
