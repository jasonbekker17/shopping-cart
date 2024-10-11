import React from 'react'
import Card from '../components/Card'
import useTitle from '../Hooks.js/useTitle'

function Cart({title}) {
  useTitle(title)
  return (
   <main>
    <section className='content-center items-center max-w-7xl mx-auto py-7 mt-20 '>
      
    
    <div className=' '>
    <h1 className=' bold text-3xl  '> Cart Items: 2</h1>
      <Card/>
    </div>
    </section>

   </main>
  )
}

export default Cart
