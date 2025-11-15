import productList from './data'

const Cart = ({filter}) => {
console.log(filter)

  return (<>
  card
    <div className='  mt-5 mx-10'>
      {
       filter.map((e,index)=>{
          return<div key={index} className='flex my-5 bg-amber-300' >
        <img className='h-30 mx-5 ' src={e.img} alt="" />
        <div>price{e.price}</div>
      </div>
        })
      }
    
    </div>
    </>
  )
}

export default Cart
