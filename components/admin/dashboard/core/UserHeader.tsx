import React from 'react'

const User = 'Prateek'

const UserHeader = () => {
  return (
    <div className='mt-8'>
        <div className='flex items-center space-x-5'>
            <div className='flex space-x-2 items-center'>
                <img className='w-10 h-10 rounded-full border-2' src="/111.jpg" alt="" />
                <h1 className='font-jost-300'>Hi, <span className='font-jost-300 text-xl'>{User}</span></h1>
            </div>
            <button className='bg-red-400 font-jost-300 hover:bg-red-600 text-white rounded-md px-4 py-2'>Improve an Existing Entry</button>
            <button className='bg-green-400 font-jost-300 hover:bg-green-600 text-white rounded-md px-4 py-2'>Create a New Entry</button>
        </div>
    </div>
  )
}

export default UserHeader