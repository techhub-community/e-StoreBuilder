import React from 'react'

function FeaturedOffer({Image}:any) {
    return (
        <div className="w-md min-w-[320px] bg-gray-500 overflow-hidden cursor-pointer  rounded-md">
            <img className="w-full h-auto rounded-md bg-cover overflow-hidden cursor-pointer  hover:transform hover:scale-105 transition-all  duration-200 ease-in-out"  src={Image} alt="" />
        </div>
    )
}

export default FeaturedOffer
