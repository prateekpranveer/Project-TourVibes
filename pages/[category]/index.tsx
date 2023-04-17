import React from 'react'
import Header from '../../components/Header'
import Category from '../../components/explore/Category'
import Search from '../../components/search/Search'
import SearchByCategory from '../../components/search/SearchByCategory'

const PlaceByCategory = () => {
  return (
    <div className='max-w-9xl px-4 m-auto'>
        <Header/>
        <div className='mt-2'><Search/></div>
        <div className='mt-2'><SearchByCategory/></div>
        <div><Category/></div>
    </div>
  )
}

export default PlaceByCategory