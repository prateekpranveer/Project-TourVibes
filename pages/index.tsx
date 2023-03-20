import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount, selectValue } from '../store/reducers/counterReducer'
import { RootState } from '../store/store'
import { useState } from 'react'
import { btnr, btng } from '../tailwindLayer'
import Header from '../components/Header'
import SpinnerButton from '../components/SpinnerButton'
import Header2 from '../components/Header2'
import Banner from '../components/Banner'
import TopVibe from '../components/TopVibe'
import Login from '../components/modals/Login'
import CreateTour from '../components/CreateTour'
import JoinTour from '../components/JoinTour'
import axios from '../axios'


const Home: NextPage = () => {

  // Testing redux dataLayer
  
  const data = async () => {
    console.log("hi")
    await axios.get('/users').then(res => console.log((res.data)));
  
  }

  data();

  return (
    <div className='max-w-9xl px-4 m-auto'>
      <Header />
      <Header2 />
      <Banner />
      <div className='flex space-x-4'>
        <CreateTour />
        <JoinTour />
      </div>

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

export default Home
