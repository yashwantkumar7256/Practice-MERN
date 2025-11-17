

const Contect = ({filter}) => {
  console.log(filter)
  return (
    <>
     
    <div className="  bg-[url('https://cdn.pixabay.com/photo/2020/10/13/13/28/ameland-5651866_1280.jpg')] h-screen w-screen  py-30 object-cover flex justify-center items-center bg-no-repeat ">
   
        <div className="w-200  ">
          <div id="bg" className="flex justify-center mb-10 font-bold text-3xl bg-[url('https://cdn.pixabay.com/photo/2016/10/22/10/07/background-1760270_1280.jpg')] lg-text-8xl sm:text-5xl">
      BANIYA CONSTRUCTION
    </div>
    
        <form className="justify-center items-center bg-white w-200px flex-col p-3 " action="">
          {
            filter.map((e,index)=>{
              return  <div
          className="flex justify-center items-center ">
            <img className="rounded-xl object-cover h-50 w-80" src={e.img} alt='' />
            <div className=" absolute">
              <span>
            
            </span>
            
            </div>
          </div>
            })
          }
         
          
          <input id="inp" type="text" placeholder="ENTER YOUR NAME" />
           <input id="inp" type="text" placeholder="ENTER YOUR Mob" />
            <input id="inp" type="Gmail"placeholder="ENTER YOUR email" />
             <input id="inp" type="Number" placeholder="ENTER Second mob " />
              <input className="h-30" id="inp" type="text" placeholder="ENTER YOUR Requrement" />
              <div className=" flex justify-center "> 
                <button className="bg-amber-40  border-2 hover:bg-amber-500 active:bg-gray-300 px-10 text-xl font-bold rounded-xl ">Submit</button>
                </div>
             </form>
    </div>
    </div>
    </>
  )
}

export default Contect

