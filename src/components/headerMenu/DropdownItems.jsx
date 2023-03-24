import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

function DropdownItems(props) {
  return (
    <li className='dropdownItem'>
        <a href="">{props.text}</a>
        <AiOutlineRight size={10}/>
    </li>
  )
}

export default DropdownItems