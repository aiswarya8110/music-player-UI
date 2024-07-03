import React from 'react'
import SpotifyLogo from '../../assets/spotify-logo.svg';
import { RiSpotifyFill } from "react-icons/ri";
const Header = () => {
  return (
    <div className='hidden px-6 py-3 max-md:flex max-md:px-0'>
       <RiSpotifyFill size='50px'/>
    </div>
  )
}

export default Header