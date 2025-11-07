import React from 'react'

const Card = () => {
  return (
    <>
      <div className='bg-white h-100 w-81 m-5 rounded-2xl'>
       <a href="">
        <img className='h-50 w-full  rounded-t-2xl object-cover overflow-hidden' src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900" alt="" /></a> 

        <div className='flex justify-between font-semibold text-green-500 m-5'>
            <h1>5 Lakhs</h1>
             <h1>Rating 5⭐</h1>
        </div>
        <div className='flex justify-center text-xl font-bold '>it's so beautiful</div>
        <div>location</div>
        <div className=' h-0.5 bg-black m-2'></div>
      <div className='flex justify-around mt-'>
        <h1>4 bed </h1>
        <h1>3 Bath</h1>
        <h1>3000sqft</h1>
      </div>
        

      </div> 
    </>
  )
}

export default Card
