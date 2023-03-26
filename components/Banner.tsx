import React from 'react'
import CreateTour from './CreateTour'

export type paddingType = {
  left: number,
  top: number
}

const Banner = () => {
  return (
    <div className='mt-6 h-40'>
        <div className=''>
            <div>
                <h1 className='font-jost-300 text-2xl'>Join Tour</h1>
            </div>
            <div className='flex space-x-4 mt-2'>
              <div className='h-20 flex justify-start items-center w-full'>
                <input className='h-14 bg-gray-50 px-4 shadow-md font-jost-400 border rounded-sm w-full' placeholder='Search of Active Tours Attraction-Wise'/>
              </div>
              <div className='flex items-center min-w-fit'>
                <CreateTour/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner