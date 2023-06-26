import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";


let alldata = [
    {
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
      offer: false,
      button: "View options",
      sale: false,
      rating: false,
    },
    {
      productName: "Special Item",
      price: "$20.00 $18.00",
      offer: true,
      button: "Add to cart",
      sale: true,
      rating: true,
    },
    {
      productName: "Sale Item",
      price: "$50.00 $25.00",
      offer: true,
      button: "Add to cart",
      sale: true,
      rating: false,
    },
    {
      productName: "Popular Item",
      price: "$40.00",
      offer: false,
      button: "Add to cart",
      sale: false,
      rating: true,
    },
    {
      productName: "Sale Item",
      price: "$50.00 $25.00",
      offer: true,
      button: "Add to cart",
      sale: true,
      rating: false,
    },
    {
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      offer: false,
      button: "View options",
      sale: false,
      rating: false,
    },
    {
      productName: "Special Item",
      price: "$20.00 $18.00",
      offer: true,
      button: "Add to cart",
      sale: true,
      rating: true,
    },
    {
      productName: "Popular Item",
      price: "$40.00",
      offer: false,
      button: "Add to cart",
      sale: false,
      rating: true,
    },
  ];

ReactDOM.createRoot(document.getElementById('root')).render(<App alldata={alldata} />);
