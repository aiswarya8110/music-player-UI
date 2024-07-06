import { createContext, useEffect, useReducer } from "react";
import { SONGS_API_URL } from "../constants/constants";
import { initialState, reducer } from "../reducer/reducer";
import { 
  UPDATE_CURRENT_SONG_INDEX, 
  UPDATE_FILTERED_SONGS, 
  UPDATE_IS_MENU_OPEN, 
  UPDATE_IS_PLAYING, 
  UPDATE_ORIGINAL_SONGS, 
  UPDATE_SEARCHED_SONGS, 
  UPDATE_SEARCH_QUERY 
} from "../actions/actoins";

export const SongContext = createContext();

export const SongContextProvider = ({ children })=>{
    const [ state, dispatch ] = useReducer(reducer, initialState);
    
    const { 
      originalSongs, 
      filteredSongs, 
      currentSongIndex, 
      isPlaying, 
      isMenuOpen, 
      searchQuery,
      searchedSongs 
    } = state;

    useEffect(()=>{
      getSongs();
    },[])

    const updateSearchedSongs = (songs)=>{
      dispatch({type: UPDATE_SEARCHED_SONGS, payload: songs});
    }

    const updateSearchQuery = (query)=>{
      dispatch({type: UPDATE_SEARCH_QUERY, payload: query});
    }

    const updateFilteredSongs = (songs)=>{
      dispatch({type: UPDATE_FILTERED_SONGS, payload: songs});
    }

    const updateIsMenuOpen = ()=>{
      dispatch({type: UPDATE_IS_MENU_OPEN});
    }

    const updateIsPlaying = ()=>{
      dispatch({type: UPDATE_IS_PLAYING})
    }

    const updateCurrentSongIndex = (newCurrentSongIndex)=>{
      dispatch({type: UPDATE_CURRENT_SONG_INDEX, payload: newCurrentSongIndex});
    }

    const getSongs = async()=>{
      const response = await fetch(SONGS_API_URL);
      const songData = await response.json();
      dispatch({type: UPDATE_ORIGINAL_SONGS, payload: songData.data});
    }

    const contextValue = {
      originalSongs, 
      currentSongIndex, 
      updateCurrentSongIndex, 
      isPlaying, 
      updateIsPlaying, 
      updateIsMenuOpen, 
      isMenuOpen, 
      updateFilteredSongs, 
      filteredSongs, 
      searchQuery, 
      updateSearchQuery,
      updateSearchedSongs,
      searchedSongs
    }
    
    return (
        <SongContext.Provider value={contextValue}>
          {children}
        </SongContext.Provider>
    )
}