import React from "react";
import CartItem from "./CartItem";

// we are getting props from React
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            key={product.id}
            product={product}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;

// props are similar to arguments which we pass to function.
//
