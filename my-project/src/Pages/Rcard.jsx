import React from 'react'

const Rcard = () => {
  return (
    <div>
      <div className='h-75 rounded-2xl w-60 mx-10 bg-white border-2 border-x-blue-300 border-y-red-500'>
        <div className=' absolute'> 
            <img className='bg-amber-50 h-15 w-15 mx-2    rounded-full mt-2 object-cover' src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg" alt="" />
            </div>
            <div className='pt-5 pl-20'>
            <div className=''>
                   Name: <span className='font-mono font-bold'>Yash Raj</span> 
                </div>
               
   
            </div>
             <div className='mt-10 mx-2 font-serif'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam recusandae cupiditate aliquid alias beatae sequi eos tenetur amet nulla vel.
                </div >
                <div className='flex justify-between mt-2 font-bold mx-2'>
                  <div className=''>
                  Rating
                  <div>⭐⭐⭐⭐/5</div>
                </div>
                <div>
              Satifaction
              <div>
                90%
              </div>
               </div>
                </div>
                              

      </div>
    </div>
  )
}

export default Rcard
