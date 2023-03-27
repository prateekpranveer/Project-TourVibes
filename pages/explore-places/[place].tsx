import React from 'react'
import Details from '../../components/Details'
import Header from '../../components/Header'
import LongSearch from '../../components/LongSearch'

const Singleplace = () => {
  return (
    <div className='max-w-9xl px-4 m-auto'>
        <Header/>
        <LongSearch/>
        <Details/>
    </div>
  )
}

export default Singleplace