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
    <div className={`flex flex-col relative pt-10 h-screen opacity-80 text-white overflow-y-auto transition-all duration-1000 ease-linear bg-transparent max-md:pt-0`} 
    >
      <Header />
      <main className='flex grow gap-5 w-full max-md:max-w-full max-md:flex-col-reverse max-md:justify-end'>
        <Sidebar />
        <Songbar />
        <AudioPlayer />
      </main>
      <div className='absolute top-0 left-0 right-0 bottom-0 h-full w-full z-[-1]' style={{backgroundImage: `linear-gradient(to bottom right, black, ${currentSong?.accent})`}}/>
    </div>
  )
}

export default App
