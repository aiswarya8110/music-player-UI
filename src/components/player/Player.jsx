import React from 'react'
import { IMAGE_API_URL } from '../../constants/constants';

const Player = ({ currentSong }) => {
  return (
    <div className='flex flex-col gap-2 w-full max-md:max-w-full'>
          <h3 className='font-bold text-3xl'>{currentSong?.name}</h3>
          <p className='text-sm text-gray-400'>{currentSong?.artist}</p>
          <img src={IMAGE_API_URL+`/${currentSong?.cover}`} 
          alt='Cover' 
          className='w-3/4 h-[350px] mt-5  rounded-md object-cover max-md:w-full'/>
    </div>
  )
}

export default Player