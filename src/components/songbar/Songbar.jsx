import React, { useContext, useEffect, useState } from 'react'
import SongList from '../song-list/SongList'
import { SongContext } from '../../context/SongContext'
import { Bars } from 'react-loader-spinner'
import Search from '../search/Search'
const Songbar = () => {
  const { originalSongs, isMenuOpen, updateFilteredSongs, filteredSongs, updateSearchedSongs } = useContext(SongContext);
  const [ selectedTab, setSelectedTab ] = useState(0);
  const isLoading = filteredSongs?.length === 0;

  const updateToTopTracks = ()=>{
    setSelectedTab(1);
    const topTrackSongs = originalSongs.filter((song)=> song?.top_track);
    updateFilteredSongs(topTrackSongs);
    updateSearchedSongs(topTrackSongs);
  }

  const updateToForYou = ()=>{
    setSelectedTab(0);
    const forYouSongs = originalSongs.filter((song)=> song?.top_track === false);
    updateFilteredSongs(forYouSongs);
    updateSearchedSongs(forYouSongs);
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
            <Search />
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