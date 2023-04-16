import React from 'react'
import { Search } from 'react-feather'

const SearchBox = () => {
  return (
    <div>
        <div className='flex justify-between items-center bg-transparent font-jost-300 p-4 border rounded-full'>
            <input className='w-full focus:outline-none' type='text' placeholder='Where do You want to go?'/>
            <div className='mr-2'><Search size={20} color='gray'/></div>
        </div>
    </div>
  )
}

export default SearchBox