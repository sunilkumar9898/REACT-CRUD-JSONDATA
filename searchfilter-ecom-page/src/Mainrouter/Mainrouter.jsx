import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Men from '../pages/Men'

const Mainrouter = () => {
  return (
    <div>
          <Routes>
              <Route path='/' element={<Home/> } />
              <Route path='/product' element={<Product/> } />
              <Route path='men' element={<Men/> } />
          </Routes>

    </div>
  )
}

export default Mainrouter
