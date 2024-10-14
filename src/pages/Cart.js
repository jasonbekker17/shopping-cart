import React from 'react'
import { useSelector } from 'react-redux';
import useTitle from '../Hooks.js/useTitle'
import ProductCard from '../components/ProductCard';





function Cart({title}) {
  const products=useSelector(state=>state.cartState.cartList)
  const total=useSelector(state=>state.cartState.total)
  useTitle(title);


  return (
<main>
  
      
      <section className="cart">
        <h1>Cart Items: {products.length}/${total}</h1>
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
  
</main>

  )
}

export default Cart
