import React from 'react'
import CoursesInfo from './CoursesInfo'
import { CourseData } from './CourseData';

function Courses() {
  return (
    <div>
            {CourseData.map((PullData) =>
            <CoursesInfo 
            course ={PullData.course}
            />
            )}
    </div>
  )
}

export default Courses