import React,{useState, useEffect} from 'react';
import {getRemainingTimeMs} from './CountDownUtils'
import {AiOutlineClose} from 'react-icons/ai';
import  './headerMenu/Marketing.css'



const defaultTimer ={
  seconds : '00',
  minutes : '00',
  hours : '00',
  days : '00',
}

function Marketing({countdownTimestampMs}) {
  const [remainingTime, setRemainingTime] =useState(defaultTimer);

  useEffect(() => {
    const intervalId = setInterval(()=>{
      updateRemainingTime(countdownTimestampMs);
    }, 1000)
    return() =>clearInterval(intervalId)
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown){
    setRemainingTime(getRemainingTimeMs(countdown))
  };
  const [close, setClose] =useState(true)
  return (
    <div className={`custom-style ${close ? 'active' : 'inactive'}`}>
      <div className='absolute right-6 top-4' ><AiOutlineClose size={20} className='text-black font-bold cursor-pointer' onClick={()=>setClose(!close)}/></div>
      <div className='flex gap-2 w-fit justify-center items-center m-auto'><h3>Sale ends today</h3> <span className='h-[20px] border-black border'> </span> <p>Start moving toward your goals with courses from $13.99.</p></div>
      <div className='w-[60%] m-auto py-1 flex gap-4 justify-center items-center'>
      <span className='font-bold'>Ends in</span>
      <span className='font-bold'>{remainingTime.days}d</span>
      <span className='font-bold'>{remainingTime.hours}h</span>
      <span className='font-bold'>{remainingTime.minutes}m</span>
      <span className='font-bold'>{remainingTime.seconds}s</span>
      </div>
    </div>
  )
}

export default Marketing