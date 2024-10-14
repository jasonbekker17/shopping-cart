import React from 'react';
import {remove} from'../store/cartSlice'
import {useDispatch} from "react-redux"

import "./ProductCard.css";
function ProductCard({ product }) {

  const dispatch=useDispatch();

  const {image,name,price}=product
  return (
    <div className="cartCard">
    <img src={image} alt={name} />
    <p className="productName">{name}</p>
    <p className="productPrice">${price}</p>
    <button onClick={()=>dispatch(remove(product))} >Remove</button>
  </div>
  );
}

export default ProductCard;
