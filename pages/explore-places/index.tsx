import React from 'react'
import Details from '../../components/Details'
import Header from '../../components/Header'
import LongSearch from '../../components/LongSearch'
import MustVisit from '../../components/MustVisit'
import MustVisitCities from '../../components/MustVisitCities'
import VibeSearch from '../../components/VibeSearch'

const explorePlaces = () => {
  return (
    <div className='max-w-9xl px-4 m-auto'>
      <Header/>
      <LongSearch/>
      <VibeSearch/>
      <MustVisit/>
      <MustVisitCities/>
      
      {/* <h1>Hello World Count = {count}</h1>
        <button onClick={
        () => dispatch(decrement())
      } className={`${btnr} hover:bg-red-800`}>Decrement</button>
      <button onClick={
        () => dispatch(increment())
      } className='px-4 py-2 bg-green-500 hover:bg-green-600 font-jost-400 rounded-md font-sm text-white'>Increment</button> */}
    </div>
  )
}

export default explorePlaces