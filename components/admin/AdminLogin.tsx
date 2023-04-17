import React from 'react'

const AdminLogin = () => {
  return (
  
            <div className='w-full'>
                <div className='flex flex-col w-80 space-y-4 m-auto font-jost-300'>
                <input className='border border-gray-600 px-6 py-4 rounded-full' placeholder='Enter Email'/>
                <input className='border border-gray-600 px-6 py-4 rounded-full' placeholder='Enter Password' type='password'/>
                <button className='bg-black text-white py-4 font-jost-300 rounded-full'>Login</button>
                </div>
            </div>
  )
}

export default AdminLogin