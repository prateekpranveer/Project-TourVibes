import React from 'react'
import Banner from '../components/Banner'
import CreateTour from '../components/CreateTour'
import CreateTourForm from '../components/CreateTourForm'
import Header from '../components/Header'
import Header2 from '../components/Header2'

const createTour = () => {
  return (
    <div className='max-w-9xl px-4 m-auto'>
      <Header/>
      <CreateTourForm/>
      
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

export default createTour