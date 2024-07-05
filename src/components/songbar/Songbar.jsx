import React, { useContext, useEffect, useState } from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2"
import SongList from '../song-list/SongList'
import { SongContext } from '../../context/SongContext'
import { Bars } from 'react-loader-spinner'
const Songbar = () => {
  const { originalSongs, isMenuOpen, updateFilteredSongs, filteredSongs } = useContext(SongContext);
  const [ selectedTab, setSelectedTab ] = useState(0);
  const isLoading = filteredSongs?.length === 0;
  
  const updateToTopTracks = ()=>{
    setSelectedTab(1);
    const topTrackSongs = originalSongs.filter((song)=> song?.top_track);
    updateFilteredSongs(topTrackSongs);
  }

  const updateToForYou = ()=>{
    setSelectedTab(0);
    const forYouSongs = originalSongs.filter((song)=> song?.top_track === false);
    updateFilteredSongs(forYouSongs);
  }

  useEffect(()=>{
    updateToForYou();
  },[originalSongs])

  return (
    <div className={`flex flex-col w-[35%] px-6 max-md:w-full max-md:${isMenuOpen ? 'flex' : 'hidden'}`}>
        <div className='w-full flex flex-col grow gap-5 max-md:w-full'>
            <ul className='flex gap-8 p-0 m-0 list-none text-lg font-semibold'>
                <li className={`${selectedTab === 0 ? 'text-white ' : 'text-gray-400'}`}>
                    <button onClick={updateToForYou} disabled={isLoading}>For You</button>
                </li>
                <li className={`${selectedTab === 1 ? 'text-white' : 'text-gray-400'}`}>
                    <button onClick={updateToTopTracks} disabled={isLoading}>Top Tracks</button>
                </li>
            </ul>
            <div className='flex items-center py-2 px-3 rounded-lg bg-gray-700'>
                <input type="text" className='flex-auto text-gray-400 bg-gray-700 outline-none' placeholder='Search Song, Artist'/>
                <button>
                    <HiMagnifyingGlass size='30px' className='text-gray-400'/>
                </button>
            </div>
            <div className="flex flex-col grow w-full">
            {
                    isLoading ? (
                        <Bars 
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="bars-loading"
                        />
                    ): (
                        <SongList />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Songbar