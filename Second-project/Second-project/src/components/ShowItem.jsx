import React from 'react'
import foodData from './foodData'

const ShowItem = () => {
  return (
    <>
      

      <div className="px-8 mt-10">
      <h2 className="text-2xl font-bold mb-4">🍽️ Popular Items</h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {foodData.map((item, index) => (
          <div
            key={index}
            className=" min-w-[170px] bg-blue-200 rounded-full shadow-md p-4 text-center hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 mx-auto object-contain"
            />
            <p className="mt-3 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
        </>
  )
}

export default ShowItem
