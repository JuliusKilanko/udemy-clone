import React from 'react'

function CourseVideo(props) {
  return (
    <div>
        <h2 className='text-[14px] ml-3 cursor-pointer'>{props.course}</h2>
    </div>
  )
}

export default CourseVideo