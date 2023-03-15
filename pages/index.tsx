import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount, selectValue } from '../store/reducers/counterReducer'
import { RootState } from '../store/store'
import { useState } from 'react'
import {btnr, btng} from '../tailwindLayer'

const Home: NextPage = () => {

  const [isWaving, setIsWaving] = useState(false);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 500);
  };

  // Testing redux dataLayer

  const count = useSelector(selectValue)
  const dispatch = useDispatch();

  return (
    <div className='space-x-4'>
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
