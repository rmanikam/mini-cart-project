import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    //this.testing();
  }

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
  //

  increaseQuantity = () => {
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

    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }
    // we are passing a callback func
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    const { price, title, qty } = this.state;
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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1643084124~hmac=1827be36cde0a0c2ac6353feca3f9ea4"
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
