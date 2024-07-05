import React, { useContext, useEffect, useRef } from 'react';
import { SongContext } from '../../context/SongContext';
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IMAGE_API_URL } from '../../constants/constants';
import Controls from '../controls/Controls';

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
    <div className='w-[40%] px-6 pl-10 pt-10 self-stretch max-md:w-full max-md:pl-6 max-md:pt-6'>
        <div className='flex flex-col gap-2 w-full max-md:max-w-full'>
          <h3 className='font-bold text-3xl'>{currentSong?.name}</h3>
          <p className='text-sm text-gray-400'>{currentSong?.artist}</p>
          <img src={IMAGE_API_URL+`/${currentSong?.cover}`} 
          alt='Cover' 
          className='w-3/4 h-[350px] mt-5 object-cover max-md:w-full'/>
          <audio src={currentSong?.url} ref={audioRef}/>
        </div>
        <Controls 
        isPlaying={isPlaying}
        setNextSong={setNextSong}
        setPrevSong={setPrevSong}
        playSong={playSong}
        pauseSong={pauseSong}
        />
    </div>
  )
}

export default AudioPlayer


/*

<TbPlayerTrackPrevFilled onClick={setPrevSong}/>
        {isPlaying ? <FaCirclePause onClick={pauseSong}/> : <FaCirclePlay onClick={playSong}/>}
        <TbPlayerTrackNextFilled onClick={setNextSong}/>
        <audio src={currentSong?.url} ref={audioRef}/>
        <RiMenu2Fill className={`hidden text-green-500 transition-all max-md:${isMenuOpen ? 'hidden' : 'block'}`}
        size='30px'
        onClick={updateIsMenuOpen}
        />
        <IoClose className={`hidden transition-all text-green-500 max-md:${isMenuOpen ? 'block' : 'hidden'}`} size='30px' onClick={updateIsMenuOpen}/>
   




*/