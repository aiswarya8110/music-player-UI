import React from 'react'
import { useContext } from 'react'
import { SongContext } from '../../context/SongContext'
import SongCard from '../song-card/SongCard';
const SongList = () => {
const { songs } = useContext(SongContext);
console.log("SONG LIST COMPONENT", songs);
  return (
    <div className='flex flex-col gap-5'>
        {
            songs?.map((song, i)=>(
                <SongCard songData={song}/>
            ))
        }
    </div>
  )
}

export default SongList