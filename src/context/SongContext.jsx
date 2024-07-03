import { createContext, useState, useEffect } from "react";
import { SONGS_API_URL } from "../constants/constants";

export const SongContext = createContext();

export const SongContextProvider = ({ children })=>{
    const [songs, setSongs ] = useState([]);

    const getSongs = async()=>{
        const response = await fetch(SONGS_API_URL);
        const songData = await response.json();
        setSongs(songData.data);
      }
    
      useEffect(()=>{
        getSongs()
      },[])
    return (
        <SongContext.Provider value={{songs}}>
            {children}
        </SongContext.Provider>
    )
}