import React from 'react'
import { MdPerson } from "react-icons/md";
import { RiSpotifyFill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between pl-5 pb-4 w-[25%] max-md:hidden self-stretch'>
        <div className='flex gap-1 items-center'>
            <RiSpotifyFill size='50px'/>
            <span className='font-bold text-lg'>Spotify</span>
        </div>
        <MdPerson size='30px'/>
    </div>
  )
}

export default Sidebar;