import React from 'react'

const Header2 = () => {
  return (
    <div className='mt-4 flex justify-between'>
    <div></div>
        <div className='flex justify-between space-x-4'>
            <div className='border-solid bg-red-50 shadow-md w-80 h-10 flex justify-center items-center'>
                <input className='bg-transparent focus:outline-none font-jost-400 w-full mx-4' type="text" placeholder=''/>
            </div>
            <div className='min-w-fit'>
            <button className='bg-red-400 shadow-md text-sm h-10 hover:bg-red-500 font-jost-400 text-white rounded-sm px-4 py-2'>Find Attraction</button>
            </div>
        </div>
    </div>
  )
}

export default Header2