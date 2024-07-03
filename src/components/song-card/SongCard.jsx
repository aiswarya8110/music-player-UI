import React from 'react'
import { IMAGE_API_URL } from '../../constants/constants';

const SongCard = ({ songData }) => {
    const { name, artist, cover } = songData; 
  return (
    <div className='flex justify-between'>
        <div className='flex gap-3 items-center'>
            <img className='w-10 h-10 object-cover rounded-full' src={IMAGE_API_URL+`/${cover}`} alt='Song Thumbnail'/>
            <div className='flex flex-col'>
                <p className='text-base'>{name}</p>
                <p className='text-sm text-gray-400'>{artist}</p>
            </div>
        </div>
        <div>
            <p className='text-gray-400'>time</p>
        </div>
    </div>
  )
}

export default SongCard