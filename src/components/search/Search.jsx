import React, { useContext } from 'react'
import { SongContext } from '../../context/SongContext'
import { HiMagnifyingGlass } from "react-icons/hi2"

const Search = () => {
    const { updateSearchQuery, searchQuery, filteredSongs, updateSearchedSongs } = useContext(SongContext);

    const handleChange = (e)=>{
        const searchTerm = e.target.value;
        if(searchTerm === ''){
            updateSearchedSongs(filteredSongs);
        }
        updateSearchQuery(searchTerm);
    }

    const handleSearch = (e)=>{
        e.preventDefault();
        const query = searchQuery.toLowerCase();

        if(query === ''){
           return updateSearchedSongs(filteredSongs);
        }

        const searchResults = filteredSongs.filter((song)=>{
            return song?.name?.toLowerCase().includes(query) || song?.artist?.toLowerCase().includes(query);
        });

        updateSearchedSongs(searchResults);
    }

    return (
        <form className='flex items-center py-2 px-3 rounded-lg bg-gray-700'>
            <input 
            type="text" 
            value={searchQuery} 
            onChange={handleChange} 
            className='flex-auto text-gray-400 bg-gray-700 outline-none' placeholder='Search Song, Artist'/>
            <button onClick={handleSearch} type='submit'>
                <HiMagnifyingGlass size='30px' className='text-gray-400 cursor-pointer'/>
            </button>
        </form>
    )
}

export default Search