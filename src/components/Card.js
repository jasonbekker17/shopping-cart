import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({img,title ,price}) {
  return (
   

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <NavLink to="#">
        <img className="rounded-t-lg" src={img} alt="" />
    </NavLink>
    <div className="p-5">
        <NavLink to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </NavLink>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
        <NavLink to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add To Cart
             
        </NavLink>
    </div>
</div>

  )
}

export default Card
