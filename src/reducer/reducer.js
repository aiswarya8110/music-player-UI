import { 
    UPDATE_CURRENT_SONG_INDEX, 
    UPDATE_IS_MENU_OPEN, 
    UPDATE_IS_PLAYING, 
    UPDATE_ORIGINAL_SONGS, 
    UPDATE_FILTERED_SONGS, 
    UPDATE_SEARCH_QUERY,
    UPDATE_SEARCHED_SONGS 
} from "../actions/actoins";

export const initialState = {
    isPlaying: false,
    originalSongs: [],
    filteredSongs: [],
    searchedSongs: [],
    currentSong: null,
    currentSongIndex: 0,
    isMenuOpen: false,
    searchQuery: '',
} 

export const reducer = (state, action)=>{
    const { type, payload } = action;
    switch(type){
        case UPDATE_CURRENT_SONG_INDEX:
            
            return {...state, currentSongIndex: payload};
        case UPDATE_ORIGINAL_SONGS:
            
            return {...state, originalSongs: payload};

        case UPDATE_IS_PLAYING:

            return {...state, isPlaying: !state.isPlaying};

        case UPDATE_IS_MENU_OPEN:
            return {...state, isMenuOpen: !state.isMenuOpen};
        
        case UPDATE_FILTERED_SONGS:
            return {...state, filteredSongs: payload};
        
        case UPDATE_SEARCH_QUERY:
            return {...state, searchQuery: payload};

        case UPDATE_SEARCHED_SONGS:
            return {...state, searchedSongs: payload};
        default:
            return state;
    }
}