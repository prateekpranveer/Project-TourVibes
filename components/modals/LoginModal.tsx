import React, { useState } from 'react'
import Spinner from '../enhancement/Spinner';
import { useRouter } from 'next/router';

const isLogging = false;
const userLevel = 2;

const LoginModal = () => {
  const router = useRouter();
  const pushRoutertoDashboard = () => {
    if (userLevel===2) router.push('/admin/dashboard');
    else {
      router.push('/')
    }
  }
  const [isLogging, setisLogging] = useState(false)
  const handleLogin = () => {
    setTimeout(pushRoutertoDashboard, 2000);
    setisLogging(true);
  }

  return (
    <div className='modal login'>
          <h1 className='text-center text-xl mb-4'>LogIn</h1>
          <div className='mt-2'>
            <div className='px-2 py-2 bg-red-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter Email Id' />
          </div>
          <div className='px-2 py-2 bg-blue-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter Password' />
          </div>
          </div>
          <div>
            <button onClick={handleLogin} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-sm mt-4 py-2 px-4 text-white rounded-full'>{isLogging?<div className='flex items-center gap-4'><Spinner/><h1>Loading</h1></div>:<>Login</>}</button>
          </div>
          <div>
          </div>
        </div>
  )
}

export default LoginModal