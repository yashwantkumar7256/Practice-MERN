// import productList from './data'

// const Cart = ({filter}) => {
// console.log(filter)

//   return (<>
//   card
//     <div className='  mt-5 mx-10 '> 
//       {
//        filter.map((e,index)=>{
//           return<div key={index} className='flex my-5 bg-amber-300' >
//         <img className='h-30 mx-5 ' src={e.img} alt="" />
//         <div>price{e.price}</div>
//       </div>
//         })
//       }
    
//     </div>
//     </>
//   )
// }

// export default Cart
import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = ({ filter }) => {
  const [cartData, setCartData] = useState([]);

  console.log("Selected ID:", filter);

  useEffect(() => {
    if (!filter) return;

    const getCartProduct = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books");

        const selected = res.data.filter(
          (item) => Number(item.id) === Number(filter)
        );

        console.log("Matched product:", selected);
        setCartData(selected);
      } catch (err) {
        console.log("error", err.message);
      }
    };

    getCartProduct();
  }, [filter]);

  return (
    <div className="mt-5 mx-10">
      <h2 className="font-bold">🛒 Cart</h2>

      {cartData.length === 0 ? (
        <p>No item added</p>
      ) : (
        cartData.map((e, index) => (
          <div key={index} className="flex my-5 bg-amber-300 p-3">
            <img className="h-30 mx-5" src={e.img} alt="" />
            <div>
              <div>{e.model}</div>
              <div>₹ {e.price}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
