import React from 'react'
import WhiteButton from '../ButtonComponent/WhiteButton'
import { useNavigate } from 'react-router-dom'

function WishlistOutput(props) {
  const MyCart = useNavigate();
  return (
    <div>
        <div className='flex justify-between'>
            <img src={props.img} alt="Course-Image"  className='w-[80px] h-[50px]'/>
            <div className='text-left'>
                <h3 className='text-[13px] font-bold w-[180px]'>{props.contents}</h3>
                <p className='text-[10px]'>{props.userName}</p>
                <span className='text-[10px] font-bold'>{props.price}</span>
                {props.id}
                <div onClick={() =>MyCart('MyCart')}>
                <WhiteButton btn = 'Add to Cart'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishlistOutput