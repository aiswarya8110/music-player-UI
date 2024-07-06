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
    <div className={`flex flex-col pt-10 h-screen text-white overflow-y-auto transition-all duration-1000 max-md:pt-0`} 
    style={{
      background: currentSong?.accent,
      // backgroundImage: `linear-gradient(to bottom right, black, ${currentSong?.accent})`
      }}>
      <Header />
      <main className='flex grow gap-5 w-full max-md:max-w-full max-md:flex-col-reverse max-md:justify-end'>
        <Sidebar />
        <Songbar />
        <AudioPlayer />
      </main>
    </div>
  )
}

export default App
