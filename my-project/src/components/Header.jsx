import React from 'react'
import Number from './Number'
import Residence from './Residence'

const Header = () => {
   
  return (
    <>
   
   <nav className='flex fixed w-full justify-between font-extrabold bg-amber-50 px-20 py-5'>
    Homex
    <div className='hidden  hover:border-amber-300 font-bold sm:flex gap-5 '>
        
        <div >Home</div>
         <div>Risedence</div>
          <div>value</div>
           <div>Reviwe</div>
           <div>contect</div>
           
    </div>

    <button>GetStartd</button>

   </nav>
   
   <div className='bg-sky-100 h-screen flex w-100% gap-10'>
    <div className=' h-full w-xl'>
        <div className='my-30 mx-20'>
            <div className=' whitespace-nowrap flex bg-white px-5 rounded-2xl w-60'>Trusted by 10k+ custumers </div>

        <div className='text-5xl font-bold tracking-wide  '> 
        <div>Discover Most</div>
        <div>Sutable</div>
        <div>propertey</div>
        </div>
        <div className='mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum libero autem commodi ad animi placeat ipsa reiciendis iure odio provident? Qui tempore deserunt perspiciatis pariatur aliquam odio sunt aspernatur dicta!</div>
      <div className='bg-amber-50 w-full rounded-2xl pl-2 my-10 flex justify-between'>
        <input  type="text" placeholder='SerchBar' />
         <button className='bg-blue-500 px-2 rounded'>Search</button>     
        </div>
        <div className='flex gap-5 whitespace-nowrap'>
         <Number num='9'/>
      <Number num='2'/>
      <Number num='28'/>
      </div>
      


        </div>
        
        
    </div>
    <div className=' h-80 mt-50 w-xl'>
      <a href="#">
        <img className='h-full w-full  object-cover rounded-2xl overflow-hidden' src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740" alt="" />
      </a>
    </div>
   </div>
   <Residence/>
 </> )
}

export default Header
