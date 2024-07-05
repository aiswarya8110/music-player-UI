import React, { useContext, useEffect, useRef } from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { SongContext } from '../../context/SongContext';
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const AudioPlayer = () => {
  const { songs, currentSongIndex, updateCurrentSongIndex, isPlaying, updateIsPlaying, updateIsMenuOpen, isMenuOpen } = useContext(SongContext);
  const audioRef = useRef();
  const currentSong = songs[currentSongIndex];
  console.log("Current Song",currentSong);

  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play();
    }
  },[currentSongIndex]);

  const pauseSong = ()=>{
    updateIsPlaying();
    audioRef.current.pause();
  }

  const playSong = ()=>{
    updateIsPlaying();
    audioRef.current.play();
  }


  const setPrevSong = ()=>{
    console.log("prev song clicked");
    let newCurrentSongIndex = currentSongIndex - 1;

    if(newCurrentSongIndex < 0){
      newCurrentSongIndex = songs.length - 1;
      return updateCurrentSongIndex(newCurrentSongIndex); 
    }

    updateCurrentSongIndex(newCurrentSongIndex);
  }

  const setNextSong = ()=>{
    console.log("next song clicked");
    let newCurrentSongIndex = currentSongIndex + 1;
    if(newCurrentSongIndex > songs.length - 1){
      newCurrentSongIndex = 0;

      return updateCurrentSongIndex(newCurrentSongIndex);
    }

    updateCurrentSongIndex(newCurrentSongIndex);
  }


  return (
    <div className='w-[40%] px-6 pl-10 pt-10 self-stretch max-md:w-full max-md:pl-6'>
        <TbPlayerTrackPrevFilled onClick={setPrevSong}/>
        {isPlaying ? <FaCirclePause onClick={pauseSong}/> : <FaCirclePlay onClick={playSong}/>}
        <TbPlayerTrackNextFilled onClick={setNextSong}/>
        <audio src={currentSong?.url} controls ref={audioRef}/>
        <RiMenu2Fill className={`hidden text-green-500 transition-all max-md:${isMenuOpen ? 'hidden' : 'block'}`}
        size='30px'
        onClick={updateIsMenuOpen}
        />
        <IoClose className={`hidden transition-all text-green-500 max-md:${isMenuOpen ? 'block' : 'hidden'}`} size='30px' onClick={updateIsMenuOpen}/>
    </div>
  )
}

export default AudioPlayer