import React from 'react'
import productList from './data'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'


const Home = ({ setprodctid}) => {
  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook= async ()=>{
      try{
        const res=await axios.get('http://localhost:3000/books');
        console.log(res.data)
        setbook(res.data);
      }catch(err){
        console.log('error',err.message);
      }
    };
    getBook();

  },[])
  var Handler=(id)=>{

setprodctid(id)

  }
  return (
    <>
    <div className='flex flex-wrap  flex flex-wrap '>
    {
      book.map((product,index)=>{
        return <div key={index} className=''>
        <div className='   m-10 overflow-hidden object-cover rounded-b-2xl'>
    <img className='object  overflow-hidden h-78 w-60 object-cover ' src={product.img} alt="" />
    <div>{product.brand}</div>
    <div>price={product.price}</div>
   <div>battary={product.battery}</div>
   <button onClick={()=>{
    Handler(product.id);
   }} className='bg-green-200 flex px-5  justify-center items-center rounded-2xl mx-10 ' > add to cart</button>
    

     </div>
     </div>
      })
    }
  </div>
    </>
  )
}

export default Home
