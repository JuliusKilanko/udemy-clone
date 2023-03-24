import React from 'react'

function WhiteButton(props) {
  return (
    <div>
        <button className="bg-white py-2 px-[45px] text-black border border-black">{props.btn}</button>
    </div>
  )
}

export default WhiteButton