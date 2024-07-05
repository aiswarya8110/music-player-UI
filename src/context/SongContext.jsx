import { createContext, useState, useEffect, useReducer } from "react";
import { SONGS_API_URL } from "../constants/constants";
import { initialState, reducer } from "../reducer/reducer";
import { UPDATE_CURRENT_SONG_INDEX, UPDATE_IS_MENU_OPEN, UPDATE_IS_PLAYING, UPDATE_SONGS } from "../actions/actoins";
export const SongContext = createContext();

export const SongContextProvider = ({ children })=>{
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { songs, currentSongIndex, isPlaying, isMenuOpen } = state;

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

        dispatch({type: UPDATE_SONGS, payload: songData.data});
      }
    
      useEffect(()=>{
        getSongs();
      },[])
    return (
        <SongContext.Provider value={{songs, currentSongIndex, updateCurrentSongIndex, isPlaying, updateIsPlaying, updateIsMenuOpen, isMenuOpen}}>
            {children}
        </SongContext.Provider>
    )
}