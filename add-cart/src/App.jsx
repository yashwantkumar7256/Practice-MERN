
import Home from './components/Home'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import productList from './components/data'

const App = () => {
  const [productid ,setproductid]=useState('');
  const [cartAll,setCartAll]=useState([]);
  useEffect(()=>{
var filterobj=productList.filter((product)=>{
    return product.id===productid;
  });
  setCartAll([...cartAll,...filterobj])
  
  },[productid])
 


 
  
  return (
   
    <>
    
    <Header/>
    <Routes>
      <Route path='/'  element={<Home setprodctid={setproductid}/> }/>

   <Route path='/cart' element={<Cart filter={cartAll}/>}/>
    </Routes>

         
       </>
  )
}

export default App
