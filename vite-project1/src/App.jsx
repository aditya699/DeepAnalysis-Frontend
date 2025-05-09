import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Products from './components/Products'
import { Founders } from './components/Founders'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <div>
          <Routes>
                <Route
                path="/"
                element={
                      <>
                         <Homepage/>
                      </>
                }  
                />
                <Route
                path="/products"
                element={
                      <>
                       <Products/>
                      </>
                }  
                />
                 <Route
                path="/founders"
                element={
                      <>
                       <Founders/>
                      </>
                }  
                />
                </Routes>
                </div>
                </BrowserRouter>
   </>
  )
}

export default App
