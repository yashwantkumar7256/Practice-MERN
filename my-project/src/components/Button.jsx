import React from 'react'

const Button = (props) => {
  return (
    <div>
      <div className='h-10 w-fit px-3 rounded-xl border-2 border-blue-300 flex justify-center items-center font-bold bg-white'>
        {props.name}

      </div>
    </div>
  )
}

export default Button
