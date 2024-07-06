import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from 'react-icons';

const Controls = ({ isPlaying, setNextSong, setPrevSong, playSong, pauseSong }) => {
  return (
    <div className='flex p-3 items-center justify-between w-3/4 max-md:w-full bg'>
        <IconContext.Provider value={{
          style: {padding: '6px', backgroundColor: '#00000080', borderRadius: '100%', cursor: 'pointer'},
          size: '30px'
          }}>
           <BsThreeDots />
          </IconContext.Provider>
        <div className='flex gap-6 items-center'>

          <IconContext.Provider value={{color: '#94a3b8', size: '20px', style:{cursor: 'pointer'}}}>
            <TbPlayerTrackPrevFilled onClick={setPrevSong}/>
          </IconContext.Provider>

          {isPlaying ? <FaCirclePause onClick={pauseSong} size='40px' className='cursor-pointer'/> : <FaCirclePlay onClick={playSong} size='40px' className='cursor-pointer'/>}
          
          <IconContext.Provider value={{color: '#94a3b8', size: '20px', style: {cursor: 'pointer'}}}>
            <TbPlayerTrackNextFilled onClick={setNextSong}/>
          </IconContext.Provider>

        </div>
        <IconContext.Provider value={{
          style: {padding: '6px', backgroundColor: '#00000080', borderRadius: '100%', cursor: 'pointer'},
          size: '30px'
          }}>
          <IoVolumeMediumSharp />
        </IconContext.Provider>
    </div>
  )
}

export default Controls