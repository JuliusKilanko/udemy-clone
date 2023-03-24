import React from 'react'
import CourseVideoData from './CourseVideoData'
import CourseVideo from './CourseVideo'

function Courses() {
  return (
    <div>
    <div className='flex justify-between px-8 py-6'>
      {CourseVideoData.map((pullData) => 
      <CourseVideo 
      
      course={pullData.course}
      />
    )}
     </div>
    </div>
  )
}

export default Courses