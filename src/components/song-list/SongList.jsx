import React from 'react'
import { useContext } from 'react'
import { SongContext } from '../../context/SongContext'
import SongCard from '../song-card/SongCard';
const SongList = () => {
const { filteredSongs } = useContext(SongContext);
  return (
    <div className='flex flex-col gap-5 pb-5'>
        {
            filteredSongs?.map((song, i)=>(
                <SongCard songData={song} key={song.id}/>
            ))
        }
    </div>
  )
}

export default SongList