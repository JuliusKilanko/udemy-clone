import React from 'react'
import NoteData from './NoteData'
import NoteOutPut from './NoteOutPut'
import WhiteButton from '../ButtonComponent/WhiteButton'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import About from '../pages/about'
// import Home from '../pages/Home'

function Note() {
    function pullNotificationData(pullNotification) {
        return(
            <NoteOutPut 
            img ={pullNotification.img}
            content ={pullNotification.content}
            time ={pullNotification.time}
            
            />
        )
    }
  return (
    <div className='notification'>
        <div className='flex w-full py-3 px-3 justify-between'>
            <h3>Notifications</h3>
            <p className='font-bold cursor-pointer'>settings</p>
        </div>
        <div>
            {NoteData.map(pullNotificationData)}
        </div>
        <div className='flex  gap-6 py-4 w-full'>
            <button className='font-bold pl-[2px]'>Mark all as read</button>
            <WhiteButton btn = 'See all'/>
        </div>
    </div>
  )
}

export default Note