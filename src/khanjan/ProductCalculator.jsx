import React, { Component } from "react";

class ProductCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { label: "Apple", price: 100 },
        { label: "Banana", price: 40 },
        { label: "Orange", price: 60 },
      ],
      selectedPrice: 100,
      quantity: 1,
    };
  }

  handleProductChange = (e) => {
    this.setState({
      selectedPrice: Number(e.target.value),
      quantity: 1, // reset quantity on change
    });
  };

  increaseQty = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decreaseQty = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }));
  };

  render() {
    const { products, selectedPrice, quantity } = this.state;
    const totalPrice = selectedPrice * quantity;

    return (
      <div style={styles.card}>
        <h2>Product Price Calculator</h2>

        {/* Dropdown */}
        <select onChange={this.handleProductChange} style={styles.select}>
          {products.map((p, index) => (
            <option key={index} value={p.price}>
              {p.label} - ₹{p.price}
            </option>
          ))}
        </select>

        {/* Quantity Controls */}
        <div style={styles.qtyBox}>
          <button
            onClick={this.decreaseQty}
            disabled={quantity === 1}
          >
            -
          </button>

          <span style={styles.qty}>{quantity}</span>

          <button
            onClick={this.increaseQty}
            disabled={quantity > 10}
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>
    );
  }
}

const styles = {
  card: {
    width: "300px",
    padding: "20px",
    margin: "30px auto",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
    fontFamily: "Arial",
  },
  select: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
  },
  qtyBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  qty: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default ProductCalculator;
