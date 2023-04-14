import React from 'react'
import Header from '../../components/Header'
import LongSearch from '../../components/LongSearch'
import MustVisit from '../../components/MustVisit'
import VibeSearch from '../../components/VibeSearch'

const explorePlaces = () => {
  return (
    <div className='max-w-9xl px-4 m-auto'>
      <Header/>
      <LongSearch/>
      <MustVisit/>
      <MustVisit/>
      <MustVisit/>
    </div>
  )
}

export default explorePlaces