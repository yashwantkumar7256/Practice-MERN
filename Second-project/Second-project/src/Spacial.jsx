import React from 'react'

const Spacial = () => {
  return (
    <div>
      <div className="px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Special Item with BG Image */}
      <div
        className="h-48 rounded-2xl shadow-lg bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WJsf8JmpnVUlpvZoO5n9AZOs54b3LqK6uQ&s')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="relative z-10 h-full flex flex-col justify-center p-6 text-white">
          <h2 className="text-xl font-semibold">🔥 Today’s Special</h2>
          <p className="text-3xl font-bold mt-1">Chicken Biryani</p>
          <p className="opacity-90">Fresh & Spicy</p>
        </div>
      </div>

      {/* Offer with BG Image */}
      <div
        className="h-48 rounded-2xl shadow-lg bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 h-full flex flex-col justify-center p-6 text-white">
          <h2 className="text-xl font-semibold">💸 Flat Discount</h2>
          <p className="text-4xl font-bold mt-1 text-yellow-400">30% OFF</p>
          <p className="text-gray-200">Only for today</p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Spacial
