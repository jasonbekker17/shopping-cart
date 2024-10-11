

import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import PageNotFound from'../pages/PageNotFound'
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home title="Home"/> }/>
        <Route path='/cart'  element={<Cart title="Cart"/>}/>
        <Route path='*' title="" element={<PageNotFound title="Page Not Found"/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
