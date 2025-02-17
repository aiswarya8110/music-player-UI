import React, { useEffect, useRef, useState } from 'react'

const Progressbar = ({ currentTime, audioRef }) => {
    const [width, setWidth ] = useState(0);
    const progressDiv = useRef();
    useEffect(()=>{
        setWidth((currentTime/audioRef.current?.duration || 0) * 100);
    },[currentTime])

    const updateCurrentTime = (e)=>{
        const pointClicked = e.nativeEvent.offsetX;
        const width = progressDiv.current.clientWidth;
        audioRef.current.currentTime = (pointClicked / width) * audioRef.current.duration;
    }

    return (
        <div className='w-3/4 max-md:w-full h-1 rounded-md bg-[#00000080] mt-4 cursor-pointer' ref={progressDiv} onClick={updateCurrentTime}>
            <div className='bg-white rounded-md h-1' style={{width: `${width}%`}}/>
        </div>
    )
}

export default Progressbar