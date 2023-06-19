import React from 'react'
import Header from "./Components/header" 
import { useState } from "react";


function App() {
 // console.log(alldata);
 let [count, setCount] = useState(0);

// const handleCount= () =>{
//   setCount(count +1);
// }

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

 

  let handleCount = (click) => {
    if (click.target.innerHTML === "Add to cart") {
      setCount(count + 1);
      click.target.innerHTML = "Remove";
     
    } else if (click.target.innerHTML === "Remove") {
      setCount(count - 1);
      click.target.innerHTML = "Add to cart";
    
    }
  };


 

let Currentyear=new Date().getFullYear();
  return (
    <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5"><a className="navbar-brand" href="#!">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">All Products</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit"><i className="bi-cart-fill me-1"></i>Cart<span className="badge bg-dark text-white ms-1 rounded-pill"></span> {count}</button>
          </form>
        </div>
      </div>
    </nav>
    {/* <!-- Header--> */}
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
      </div>
    </header>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

        {alldata.map((value, index) => (
            <Header key={index} data={value} handleCount={handleCount} />
          ))}

          </div>
          </div>

          <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website {Currentyear}</p>
      </div>
    </footer>
          </section>
     
  
    
     
     
   
    </>
  );
}

export default App;



