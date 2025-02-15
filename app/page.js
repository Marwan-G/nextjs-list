"use client"
import React, { useState } from 'react'
import {getImageUrl} from '@/app/utils'
       
import {places} from '@/app/data'

const page = () => {
  return (
    <div className='flex container'>
      <ListPlaces />
    </div>
  )
}

export default page


const ListPlaces = ()=>{
  const [isLarge, setIsLarge]=useState(false)

  return (
<div>
<div class="flex items-center mb-4">
  <input id="default-checkbox"
    type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    checked={isLarge} 
    onChange={ e => {
      setIsLarge(e.target.checked)
      }}
    />
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div>
  {places.map((item) => (
    <ul key={item.id} className="overflow-hidden rounded-sm bg-white px-2 py-3 shadow-sm"> {/* Reduced padding */}
      <li className="space-y-2"> {/* Reduced vertical spacing */}
        <div className="flex h-28 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"> {/* Reduced height to h-48 */}
          {/* Image Container */}
          <div className="flex h-full w-1/5 min-w-[150px] shrink-0 rounded-l-lg"> {/* Narrower image column */}
            <GetImage place={item} imageSize={isLarge} />
          </div>
          
          {/* Text Content */}
          <div className="p-4 flex flex-col justify-center"> {/* Reduced padding */}
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {/* Smaller text */}
              {item.name}
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-400"> {/* Smaller text */}
              {item.description}
            </p>
          </div>
        </div>
      </li>
    </ul>
  ))}
</div>
  )
}


const GetImage =({place , imageSize })=>{      
return(
  <div className={`aspect-video ${imageSize ? 'w-full' : 'w-1/2'} overflow-hidden relative`}>
  <img 
    src={getImageUrl(place)}
    className="w-full h-full object-cover transition-all duration-300"
    alt={place.name}
  />
</div>

   
 )

}


