
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = (props) => {

  
  const Handler=(id)=>{
props.setProdctid(id);

  }
  return (
 
  <>
 <div className='group h-100 w-81 gap-10 flex'>
  <div className='bg-white border-2 border-blue-100 overflow-auto h-100 w-81 m-5 rounded-2xl '>
      
        <img className='h-50  w-full cursor-pointer  rounded-t-2xl object-cover overflow-hidden' src={props.img} alt="" />

      <div className='flex justify-between font-semibold text-green-500 mx-5 mt-5'>
        <h1>{props.price}</h1>
        <h1>Rating {props.rating}⭐</h1>
      </div>
      <div className=' mx-5 font-bold '>Best property dealer</div>
      <div className=' mx-3 flex gap-2'>  
        <MapPin />
      <span>{props.loc}</span>
      </div>
      <div className=' h-0.5 bg-black m-2'></div>
    
      <div className='flex justify-around '>

        <h1>4 bed </h1>
        <h1>3 Bath</h1>
        <h1>3000sqft</h1>
      </div>
      <Link className='flex justify-center mt-3' to='/contect'><button
       onClick={()=>{
        Handler(props.id);
       }}
       id='btn' className='flex  border-2 border-b-black w-[70%] rounded-2xl justify-center hover:bg-amber-200 font-bold active:bg-black hidden group-hover:block' >Buy</button></Link>

    </div>
    
    </div>
    
  </>
)
}

export default Card
