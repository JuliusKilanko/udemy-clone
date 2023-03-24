import React from 'react'
import WishlistOutput from './WishlistOutput'
import WishlistData from './WishlistData'


function Wishlist() {
    function pullWishlistData(pullWishList){
        return(
            <WishlistOutput 
            key ={pullWishList.id}
            img ={pullWishList.img}
            contents ={pullWishList.contents}
            userName={pullWishList.userName}
            price ={pullWishList.price}
            />
        )
    }
  return (
    <div>
        <div>
            {WishlistData.map(pullWishlistData)}
        </div>
    </div>
  )
}

export default Wishlist