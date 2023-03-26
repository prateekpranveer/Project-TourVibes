import React from 'react'

const SingleTour = () => {
  return (
    <div>
        <div className='flex cursor-pointer hover:bg-gray-600 text-black hover:text-white justify-around items-center w-60 rounded-md shadow-md bg-gray-200 h-20'>
            <div>
            <div className='language'><h3 className='text-xs font-jost-400'>English</h3></div>
                <div className='Date'><h3 className='text-2xl font-jost-300'>January 20</h3></div>
            </div>
            <div className='w-12'>
                <img src="./for.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SingleTour