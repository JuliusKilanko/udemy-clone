import React from 'react'
import CartCourseOutput from './CartCourseOutput'
import CartCourseData from './CartCourseData'

function CartCourse() {

    function pullCartCourseData (pullChatData) {
        return(
            <CartCourseOutput 
            key ={pullChatData.id}
            img ={pullChatData.img}
            coursetitle ={pullChatData.coursetitle}
            cousecreator ={pullChatData.cousecreator}
            courseprice ={pullChatData.courseprice}
            />
        )
    }
  return (
    <div>

        {CartCourseData.map(pullCartCourseData)}
    </div>
  )
}

export default CartCourse