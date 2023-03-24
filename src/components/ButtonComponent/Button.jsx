import React from 'react'

function Button(props) {
  return (
    <div>
        <button className='bg-black py-4 px-[80px] text-white'>{props.btn}</button>
    </div>
  )
}

export default Button