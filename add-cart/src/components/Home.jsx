import React from 'react'
import productList from './data'


const Home = ({ setprodctid}) => {
  var Handler=(id)=>{

setprodctid(id)

  }
  return (
    <>
    <div className='flex flex-wrap'>
    {
      productList.map((product,index)=>{
        return <div key={index} className=''>
        <div className='   m-10 overflow-hidden object-cover rounded-b-2xl'>
    <img className='object  overflow-hidden h-78 w-60 object-cover ' src={product.img} alt="" />
    <div>{product.brand}</div>
    <div>price={product.price}</div>
   <div>battary={product.battery}</div>
   <button onClick={()=>{
    Handler(product.id);
   }} className='bg-green-200 flex px-5  justify-center items-center rounded-2xl mx-10' > add to cart</button>
    

     </div>
     </div>
      })
    }
  </div>
    </>
  )
}

export default Home
