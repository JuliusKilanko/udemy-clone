import React from 'react'
import MyLearningOutput from './MyLearningOutput'
import MyLearningData from './MyLearningData'
import Button from '../ButtonComponent/Button'
import { useNavigate } from 'react-router-dom'

function MyLearning() {

  const MyLearning = useNavigate();

    function pullCourseInformation(pullCourse){
        return(
            <MyLearningOutput 
            img={pullCourse.img}
            title={pullCourse.title}
            progress ={pullCourse.progress}
            />
        )
    }
  return (
    <div>
        <div className='flex gap-4 flex-col'>
        {MyLearningData.map(pullCourseInformation)}
        <div onClick={()=>MyLearning('MyLearning')}>
        <Button btn='Go To My Learning'/>
        </div>
        </div>
    </div>
  )
}

export default MyLearning