import React from "react";

class CartItem extends React.Component {
  render() {
    // Every instance of CartItem will have property called props
    // and inside that props we will have data  which we are passing as attributes in Cart file
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
      this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          {/* Note Object Destructuring taking place here */}
          {/* 
          in  { {} }  the inner curly braces can be written as 
          {} = example
          where example = {
              n: "Object",
              platform: "gfg"
          }; */}

          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1643084124~hmac=1827be36cde0a0c2ac6353feca3f9ea4"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;

// What is state?
// state is just a way to store local data for that component.
//state is a plain javascript object. it can have properties
// like

// {
//     title:
//     price:
//     qty:
// }

// why this comes undefined?

// class Vehicle {
//   constructor (company)
//   {
//     this.company = company;
//   }
//   getCompany() {
//     console.log('this', this);
//     console.log('this.company', this.company);
//   }
// }

// var car = new Vehicle('Audi')
// car
// car.getCompany()
// // result is
// this
// this.company which is Audi

// var func = car.getCompany
// func()

// now this will be undefined.

// so sol is

// write car.getCompany.bind(car)

// now call func

// Note we dont need this code anymore as we are passing state to it

// this.increaseQuantity = this.increaseQuantity.bind(this);
//this.testing();

// testing() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done");
//     }, 5000);
//   });

//   promise.then(() => {
//     // In promise setState acts like a synchronous call
//     //this.setState({ qty: 100 });

//     this.setState({ qty: this.state.qty + 10 });
//     this.setState({ qty: this.state.qty + 10 });
//     this.setState({ qty: this.state.qty + 10 });
//     console.log("state, this.state");
//   });
// }
// Note setState FUNC is inherited from the Component class
//in React and we can use in our component

// react performs batching and setStae call is asynchronous
// inside of event handlers
// if we want to perform an action just after state has
// finished updating we can pass an option of callback to our
// setState func
// outside of event handler react doesnt perform batching
// and setState call is synchronous

//console.log("this", this.state);
// why is this coming to be undefined because in OnClick ={this.increaseQuantity}
//we are passing reference of  increaseQuantity function
// and value of this depends on how func is being called

//internally react is calling this increaeQuantity func that is
//value of this is lost

//setState form 1

//  this.setState({
//    qty: this.state.qty + 1
//  });

// this.setState (
//   {
//     qty: this.state.qty - 1;
//   },  () => {});

// setState form 2
// if prevState is required use this method

// increaseQuantity = () => {
//   this.setState((prevState) => {
//     return {
//       qty: prevState.qty + 1,
//     };
//   });
// };

// decreaseQuantity = () => {
//   const { qty } = this.state;

//   if (qty === 0) {
//     return;
//   }
//   // we are passing a callback func
//   this.setState((prevState) => {
//     return {
//       qty: prevState.qty - 1,
//     };
//   });
// };
