import { UPDATE_CURRENT_SONG_INDEX, UPDATE_IS_PLAYING, UPDATE_SONGS } from "../actions/actoins";

export const initialState = {
    isPlaying: false,
    songs: [],
    currentSong: null,
    currentSongIndex: 0
} 

export const reducer = (state, action)=>{
    switch(action.type){
        case UPDATE_CURRENT_SONG_INDEX:
            
            return {...state, currentSongIndex: action.payload};
        case UPDATE_SONGS:
            
            return {...state, songs: action.payload};

        case UPDATE_IS_PLAYING:

            return {...state, isPlaying: !state.isPlaying};
        default:
            
            return state;
    }
}