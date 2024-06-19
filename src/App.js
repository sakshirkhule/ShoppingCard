import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import { useState } from 'react';
import CartList from './components/CartList';

function App() {
       const [product, setProduct]=useState([
        {
          image:"./mensShoes.jpg",
          name: "Sparx",
          category:"FootWare",
          Price:3000
        },
        {
          image:"./mensShoes2.jpg",
          name: "Adidas",
          category:"FootWare",
          Price:2000
        },
        {
          image:"./ladiesShoes.jpg",
          name: "Belly",
          category:"FootWare",
          Price:300
        },
        {
          image:"./ladiesShoes2.jpg",
          name: "Gucci",
          category:"FootWare",
          Price:7000
        },
        {
          image:"./dress1.jpg",
          name: "Minal",
          category:"Dress",
          Price:450
        },
        {
          image:"./dress2.jpg",
          name: "Anarkali",
          category:"Dress",
          Price:3020
        },
        {
          image:"./dress3.jpg",
          name: "Tyzer",
          category:"Dress",
          Price:6790
        },
        {
          image:"./watch1.jpg",
          name: "Fastrack",
          category:"Accessories",
          Price:3400
        },
        {
          image:"./watch2.jpg",
          name: "Fastrack",
          category:"Accessories",
          Price:7890
        },
        {
          image:"./watch3.jpg",
          name: "Sonata",
          category:"Accessories",
          Price:2000
        },
        {
          image:"./watch4.jpg",
          name: "Titan",
          category:"Accessories",
          Price:1000
        }
       ])


       const [cart,setCart]=useState([])
       const[showCart,setShowCart]=useState(false)
       const addToCart=(data)=>{
                 
                 setCart([...cart,{...data,quantity : 1}])
       }


       const handleShow=(value) =>{
        setShowCart(value)
       }

  return (
    <div>
       <Header count={cart.length} handleShow={handleShow}></Header>
       {

        showCart?

        <CartList cart={cart}></CartList>:
        <ProductListing product={product} addToCart={addToCart}></ProductListing>
       }
        
    </div>
  );
}

export default App;

