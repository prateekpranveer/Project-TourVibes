import React from 'react'
import CreateTourForm from '../components/CreateTourForm'
import Header from '../components/Header'

const createTour = () => {
  return (
    <div className='max-w-9xl px-4 m-auto'>
      <Header/>
      <CreateTourForm/>
      {/* This feature is still in developemnt */}
    </div>
  )
}

export default createTour