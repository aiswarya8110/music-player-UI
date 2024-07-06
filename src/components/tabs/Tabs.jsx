import React from 'react'

const Tabs = ({ selectedTab, updateToForYou, updateToTopTracks, isLoading }) => {
  return (
    <ul className='flex gap-8 p-0 m-0 list-none text-lg font-semibold'>
        <li className={`${selectedTab === 0 ? 'text-white ' : 'text-gray-400'}`}>
            <button onClick={updateToForYou} disabled={isLoading}>For You</button>
        </li>
        <li className={`${selectedTab === 1 ? 'text-white' : 'text-gray-400'}`}>
            <button onClick={updateToTopTracks} disabled={isLoading}>Top Tracks</button>
        </li>
    </ul>
  )
}

export default Tabs