import React, { useEffect, useState } from 'react'

const Progressbar = ({ currentTime, audioRef }) => {
    const [width, setWidth ] = useState(30);
    console.log("Audio Duration", audioRef.current?.duration);
    console.log("Current Time", currentTime);
    useEffect(()=>{
        console.log("setting width");
        setWidth((currentTime/audioRef.current?.duration || 0) * 100);
    },[currentTime])

    return (
        <div className='w-3/4 max-md:w-full h-1 rounded-md bg-gray-900 mt-4'>
            <div className='bg-white rounded-md h-1' style={{width: `${width}%`}}/>
        </div>
    )
}

export default Progressbar