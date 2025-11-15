import React from 'react'
import Button from './Button'
import Card from './Card'

const Residence = () => {
   const Details=[
    {
      img:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      price:"10lakh",
      rating:"5",
      location:"Indore",
 },
  {
      img:"https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      price:"8Lakhs",
      rating:"4.5",
      location:"Bhopal",
 },

 {
      img:"https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_640.jpg",
      price:"15 Lakhs",
      rating:"5",
      location:"Bihar,Muzaffarpur",
 },
 {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HGaEt15uOuVcZGertpKDe5dNgkzEh3DYJw&s",
      price:"20 Lakhs",
      rating:"5",
      location:"Bihar,patna",
 },



];
  return (
    <>
    
        <div className='h-screen w-full  mt-80  md:mt-0  '>
           <div className='h-30 pt-10  w-[70%] mx-[15%]'>
            <div className='  font-bold  whitespace-nowrap text-xl  flex justify-center items-center  '>
             POPULAR RESIDANCES
            </div>
            <div className=''>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit dicta asperiores reiciendis facili.
      </div>
      <div className='flex my-10  gap-5 whitespace-nowrap md:mt-10 justify-center'>
     <Button name="All property" />
     <Button name="Value" />
     <Button name="villas" />
     <Button name="Best deals" />
     
     </div >
     <div className=' md:flex  h-140 flex-row my-0 md:my-20  overflow-auto  min-w-170    '>
     {Details.map(( elem,idx)=>{

      return <Card  key={idx}  img={elem.img} price={elem.price} loc={elem.location} rating={elem.rating}/>
     })}
     </div>
     
     </div>
        </div>
      
    </>
  )
}

export default Residence
