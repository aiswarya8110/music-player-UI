import React, { useContext, useEffect, useRef, useState } from 'react';
import { SongContext } from '../../context/SongContext';
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Controls from '../controls/Controls';
import Progressbar from '../progress-bar/Progressbar';
import Player from '../player/Player';

const AudioPlayer = () => {
  const { originalSongs, currentSongIndex, updateCurrentSongIndex, isPlaying, updateIsPlaying, updateIsMenuOpen, isMenuOpen } = useContext(SongContext);
  const [ currentTime, setCurrentTime ] = useState(0);
  const audioRef = useRef();
  const currentSong = originalSongs[currentSongIndex];

  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play();
    }
  },[currentSongIndex]);

  const updateCurrentTime = (e)=>{
    setCurrentTime(e.target.currentTime);
  }

  const handleOnEnd = ()=>{
    updateIsPlaying();
    setCurrentTime(0);
  }

  const pauseSong = ()=>{
    updateIsPlaying();
    audioRef.current.pause();
  }

  const playSong = ()=>{
    updateIsPlaying();
    audioRef.current.play();
  }


  const setPrevSong = ()=>{
    let newCurrentSongIndex = currentSongIndex - 1;

    if(newCurrentSongIndex < 0){
      newCurrentSongIndex = originalSongs.length - 1;
      return updateCurrentSongIndex(newCurrentSongIndex); 
    }

    updateCurrentSongIndex(newCurrentSongIndex);
  }

  const setNextSong = ()=>{
    let newCurrentSongIndex = currentSongIndex + 1;
    if(newCurrentSongIndex > originalSongs.length - 1){
      newCurrentSongIndex = 0;

      return updateCurrentSongIndex(newCurrentSongIndex);
    }

    updateCurrentSongIndex(newCurrentSongIndex);
  }

  return (
    <div className='w-[40%] px-6 pl-10 pt-10 self-stretch max-md:w-full max-md:pl-6 max-md:pt-0'>
        <audio src={currentSong?.url} ref={audioRef} onTimeUpdate={updateCurrentTime} onEnded={handleOnEnd}/>
        <div className='flex flex-col gap-2 w-full max-md:max-w-full'>
          <RiMenu2Fill 
          className={`hidden self-end text-right text-green-500 transition-all duration-700 max-md:${isMenuOpen ? 'hidden' : 'flex'}`}
          size='30px'
          onClick={updateIsMenuOpen}
          />
          <IoClose 
          className={`hidden self-end text-right text-green-500 transition-all duration-700 max-md:${isMenuOpen ? 'flex' : 'hidden'}`} 
          size='30px' 
          onClick={updateIsMenuOpen}
          />
          <Player 
          currentSong={currentSong}/>
          <Progressbar 
          currentTime={currentTime} 
          audioRef={audioRef}/>
          <Controls 
          isPlaying={isPlaying}
          setNextSong={setNextSong}
          setPrevSong={setPrevSong}
          playSong={playSong}
          pauseSong={pauseSong}
          />
        </div>
    </div>
  )
}

export default AudioPlayer