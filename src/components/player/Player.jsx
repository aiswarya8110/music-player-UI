import React from 'react'
import { IMAGE_API_URL } from '../../constants/constants';
import { Bars } from 'react-loader-spinner';
const Player = ({ currentSong }) => {

  return (
    <>
        <h3 className='font-bold text-3xl'>{currentSong?.name}</h3>
        <p className='text-sm text-gray-400'>{currentSong?.artist}</p>
        <div className='w-3/4 h-[350px] mt-5 max-md:w-full'>
          {!currentSong?.name ? (
              <div className='flex items-center justify-center w-full h-full'>
                <Bars 
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="bars-loading"
                />
              </div>
          ): (
            <img src={IMAGE_API_URL+`/${currentSong?.cover}`} 
            alt='Cover' 
            className='w-full h-full object-cover rounded-md'/>
          )}
        </div>
        
    </>
  )
}

export default Player