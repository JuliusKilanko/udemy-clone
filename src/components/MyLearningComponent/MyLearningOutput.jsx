import React from 'react'

function MyLearningOutput(props) {
  return (
    <div>
        <div className='flex border-b py-2'>
            <img src={props.img} alt="Course-Logo" className='w-[80px] h-[55px] cursor-pointer' />
            <div><h1 className="text-[16px] w-[250px] text-left pl-5 font-bold cursor-pointer">{props.title}</h1>
            <hr className='border-4 rounded-full w-[210px] ml-5  border-black'/></div>
        </div>
    </div>
  )
}

export default MyLearningOutput