import { UPDATE_CURRENT_SONG_INDEX, UPDATE_IS_MENU_OPEN, UPDATE_IS_PLAYING, UPDATE_ORIGINAL_SONGS, UPDATE_FILTERED_SONGS } from "../actions/actoins";

export const initialState = {
    isPlaying: false,
    originalSongs: [],
    filteredSongs: [],
    currentSong: null,
    currentSongIndex: 0,
    isMenuOpen: false,
} 

export const reducer = (state, action)=>{
    console.log(action.payload);
    switch(action.type){
        case UPDATE_CURRENT_SONG_INDEX:
            
            return {...state, currentSongIndex: action.payload};
        case UPDATE_ORIGINAL_SONGS:
            
            return {...state, originalSongs: action.payload};

        case UPDATE_IS_PLAYING:

            return {...state, isPlaying: !state.isPlaying};

        case UPDATE_IS_MENU_OPEN:
            return {...state, isMenuOpen: !state.isMenuOpen};
        
        case UPDATE_FILTERED_SONGS:
            return {...state, filteredSongs: action.payload};
        default:
            return state;
    }
}