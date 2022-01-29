import React from "react";
const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons-png.flaticon.com/512/2121/2121815.png"
          alt="cart-icon"
        />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default Navbar;
