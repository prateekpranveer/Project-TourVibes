import React from 'react'
import DangerousHTML from './dangerousHTML'

const MaxPlace = ({singlePlaceData}:any) => {
    console.log(singlePlaceData)
  return (
    <div>
        <div>


            <div className=''>
            
                <div className='flex flex-wrap lg:space-x-10 lg:space-y-0 space-y-10 items-center'>
                    <div className=''>
                        <h1 className='font-jost-300 text-3xl border-b-1 border-gray-400 text-gray-500 max-w-fit'>{singlePlaceData.name}</h1>
                        <p className='mt-4 font-jost-400 text-gray-900 text-md'>{singlePlaceData.adress}</p>
                    </div>
                    <div className='flex space-x-3 font-jost-300 h-12'>
                        <button className='bg-white px-8 py-2 border rounded-sm text-gray-800 hover:bg-gray-500 hover:text-white'>Active Tours</button>
                        <button className='bg-black px-8 py-2 rounded-sm text-white'>Explore Gallary</button>
                    </div>
                </div>
                <div className='mt-12 text-sm max-w-5xl font-jost-400 text-gray-700'>
                    <div><DangerousHTML htmlContent={singlePlaceData.desc}/></div>
                </div>
            </div>



            <div></div>
        </div>
    </div>
  )
}

export default MaxPlace