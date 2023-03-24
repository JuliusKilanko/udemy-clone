import React from 'react'
import Courses from './CourseVideo/Courses'
import Banner from './components/Banner/Banner'
import Marketing from './components/Marketing'
import Header from './components/headerMenu/Header'

function Home() {
  return (
    <div>
        <Marketing countdownTimestampMs={3643763600000}/>
        <Header />
        <Courses />
        <Banner />
    </div>
  )
}

export default Home