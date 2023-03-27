import React from 'react'

const LoginModal = () => {
  return (
    <div className='modal login'>
          <h1 className='text-center text-xl mb-4'>LogIn</h1>
          <div className='mt-2'>
            <div className='px-2 py-2 bg-red-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300' type="text" placeholder='Enter Email Id' />
          </div>
          <div className='px-2 py-2 bg-blue-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300' type="text" placeholder='Enter Password' />
          </div>
          </div>
          <div>
            <button className='bg-blue-400 hover:bg-blue-500 text-sm mt-4 py-2 px-4 text-white rounded-sm'>Login</button>
          </div>
        </div>
  )
}

export default LoginModal