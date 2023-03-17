import React from 'react'

const Header = () => {
  return (
    <div className='h-20 m-auto mt-5 flex justify-between items-center'>
      <div>
        <div className=' bg-slate-200 m-auto flex justify-center items-center rounded-md'>
          <span><span className='font-jost-300 bg-red-400 text-xl py-1 px-1 rounded-sm text-white'>Tour</span><span className='font-jost-300 bg-blue-500 py-1 px-1 rounded-sm text-2xl text-white'>Vibe</span></span>
        </div>
      </div>
      <div className='font-jost-400 text-gray-600 flex items-center justify-between'>
        <div className='w-3/5 min-w-fit px-6'>
          <div>
            <ul className='flex justify-between'>
              <li className='border-b-2 text-sm border-solid border-gray-700'>Explore Places</li>
            </ul>
          </div>
        </div>

        <div className='w-40 flex min-w-fit space-x-2 justify-between'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 h-8 font-jost-400 text-sm'>Login</button>
          <button className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 h-8 font-jost-400 rounded-sm text-sm'>Signup</button>


        </div>
      </div>
    </div>
  )
}

export default Header