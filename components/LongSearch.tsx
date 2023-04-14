import React from 'react'
import { Search } from 'react-feather'

const LongSearch = () => {
  return (
    <div className='mt-4 w-full flex'>
        <div className='flex justify-between w-full space-x-4'>
            <div className='rounded-sm w-full h-12 border-slate-400 border px-4 flex justify-center items-center'>
                <input className='bg-transparent focus:outline-none tracking-wider font-jost-400 text-gray-800 w-full text-sm' type="text" placeholder='EXPLORE'/>
                <Search color='gray'/>
            </div>
        </div>
    </div>
  )
}

export default LongSearch