import { useContext } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Songbar from './components/songbar/Songbar';
import AudioPlayer from './components/audioplayer/AudioPlayer';
import { SongContext } from './context/SongContext';

function App() {
  const { originalSongs, currentSongIndex } = useContext(SongContext);
  const currentSong = originalSongs[currentSongIndex];

  return (
    <div className={`flex flex-col z-[1] relative pt-10 h-screen text-white overflow-y-auto transition-all duration-1000 ease-linear max-md:pt-0`} 
    style={{background: currentSong?.accent}}
    >
      <Header />
      <main className='flex grow gap-5 w-full overflow-y-auto max-md:max-w-full max-md:flex-col-reverse max-md:justify-end'>
        <Sidebar />
        <Songbar />
        <AudioPlayer />
      </main>
      <div className={`absolute z-[-1] h-screen w-screen top-0 left-0 right-0 bottom-0 bg-gradient-to-tl from-black to-[${currentSong?.accent}]`}/>
    </div>
  )
}

export default App
