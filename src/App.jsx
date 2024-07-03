import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Songbar from './components/songbar/Songbar';
import AudioPlayer from './components/audioplayer/AudioPlayer';

function App() {
  return (
    <div className='flex flex-col pt-10 h-screen text-white overflow-y-auto bg-slate-950 max-md:pt-0'>
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
