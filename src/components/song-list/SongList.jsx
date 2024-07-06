import React from 'react'
import { useContext } from 'react'
import { SongContext } from '../../context/SongContext'
import SongCard from '../song-card/SongCard';
const SongList = () => {
const { searchedSongs } = useContext(SongContext);
  return (
    <div className='flex flex-col gap-5 pb-5'>
        {
          searchedSongs?.length === 0 ? (
            <p className='text-green-500 text-center'>No search results found</p>
          ): (
              searchedSongs?.map((song, i)=>(
                <SongCard songData={song} key={song.id}/>
            ))
          )
        }
    </div>
  )
}

export default SongList