import React from 'react'
import { Plus } from 'react-feather'

const Banner = () => {
  return (
    <div>
        <div className='bg-gray-100 rounded-sm px-12 py-24'>
            <div className='font-rale-300'>
                <h1 className=' text-5xl max-w-3xl leading-snug text-gray-700'>Explore India with Like Minded Travellers</h1>
                <div className='flex space-x-4 mt-8'>
                    <button className='bg-gray-200 px-6 py-4 hover:bg-gray-300 rounded-full flex space-x-4'><span>Create Tour</span><span><Plus/></span></button>
                    <button className='bg-gray-200 px-6 py-4 hover:bg-gray-300 rounded-full flex space-x-4'><span>Join Tour</span><span><Plus/></span></button>
                </div>
                </div>
        </div>
        <div>
            <div className='font-jost-300 text-3xl p-12 bg-blue-500 hover:bg-blue-600 text-white mt-10 flex items-center justify-center'>
                <button><h1>Explore our Destination Directory</h1></button>
            </div>
        </div>
    </div>
  )
}

export default Banner