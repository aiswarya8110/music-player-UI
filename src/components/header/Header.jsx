import React from 'react'
import { RiSpotifyFill } from "react-icons/ri";
const Header = () => {
  return (
    <div className='hidden px-6 py-3 max-md:flex'>
       <div className='flex gap-1 items-center'>
            <RiSpotifyFill size='50px'/>
            <span className='font-bold text-lg'>Spotify</span>
        </div>
    </div>
  )
}

export default Header