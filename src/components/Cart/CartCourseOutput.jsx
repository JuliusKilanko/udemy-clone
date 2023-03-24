import React from 'react'

function CartCourseOutput(props) {
  return (
    <div className='flex py-1 border-b-[1px]'>
        <img src={props.img} alt="Course Thumbnail" className='w-[65px] h-[45px]' />
        <div className='w-[220px] text-left px-4'>
            <h3 className='text-[14px] leading-none'>{props.coursetitle}</h3>
            <p className='text-[12px]'>{props.cousecreator}</p>
            <span className='text-[11px]'>$ {props.courseprice}</span>
            {props.id}
        </div>
    </div>
  )
}

export default CartCourseOutput