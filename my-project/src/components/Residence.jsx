import React from 'react'
import Button from './Button'
import Card from './Card'

const Residence = () => {
  return (
    <>
    
        <div className='h-screen w-full bg-amber-100'>
           <div className='h-30 bg-amber-500 w-[70%] mx-[15%]'>
            <div className='  font-bold whitespace-nowrap text-4xl flex justify-center items-center'>
             POPULAR RESIDANCES
            </div>
            <div className=''>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit dicta asperiores reiciendis facili.
      </div>
      <div className='flex gap-5 whitespace-nowrap mt-10 justify-center'>
     <Button name="All property" />
     <Button name="Value" />
     <Button name="villas" />
     <Button name="Best deals" />
     
     </div>
     <Card/>
     </div>
        </div>
      
    </>
  )
}

export default Residence
