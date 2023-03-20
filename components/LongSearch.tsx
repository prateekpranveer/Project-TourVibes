import React from 'react'

const LongSearch = () => {
  return (
    <div className='mt-4 w-full flex'>
        <div className='flex justify-between w-full space-x-4'>
            <div className='border-solid w-full h-12 border-slate-400 border flex justify-center items-center'>
                <input className='bg-transparent focus:outline-none tracking-wider font-jost-400 text-gray-800 w-full mx-4 text-sm' type="text" placeholder='EXPLORE'/>
            </div>
        </div>
    </div>
  )
}

export default LongSearch