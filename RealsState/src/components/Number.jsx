import React from 'react'

const Number = (props) => {
  return (
    <div>
      <div className='text-3xl font-bold text-blue-500'>
        | {props.num}k+
      </div>
    </div>
  )
}

export default Number
