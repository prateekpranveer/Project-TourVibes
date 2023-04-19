import React from 'react'

const Hamburger = () => {
  return (
    <div>
        <div className='w-10 h-10 mr-2 flex justify-center items-center'>
            <div className='p-4 flex flex-col space-y-2'>
                <div className='he-1 rounded-full bg-red-400 w-6'></div>
                <div className='he-1 rounded-full bg-blue-400 w-6'></div>
                <div className='he-1 rounded-full bg-green-400 w-6'></div>
            </div>
        </div>
    </div>
  )
}

export default Hamburger