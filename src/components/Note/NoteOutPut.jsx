import React from 'react'

function NoteOutPut(props) {
  return (
    <div>
        <div className='flex pl-2 py-4 justify-between'>
            <img src={props.img} alt="" className='rounded-full w-[50px] h-[50px] border' />
            <div className='text-left px-2'>
                <h3 className='font-bold cursor-pointer'>{props.content}</h3>
                <span className='text-[12px]'>{props.time}</span>
            </div>
        </div>
    </div>
  )
}

export default NoteOutPut