import React from 'react'
import Link from 'next/link'
import LoginModal from '../Header'

const Login = ({loginModal,setLoginModal, setSignUpModal}: any) => {
  return (
    <div className='relative'>
      <div>
      <button onClick={()=>{
        setLoginModal(!loginModal);
        setSignUpModal(false);
      }} className=' bg-red-400 hover:bg-red-600 px-4 h-8 rounded-sm text-white text-sm'>Login</button>
      </div>

      <div className={`absolute ${loginModal==false?'hidden':''} bg-white mt-6 shadow-lg w-80 rounded-md right-0 px-8 py-8`}>
        <div className='modal login'>
          <h1 className='text-center text-xl mb-4'>LogIn</h1>
          <div className='mt-2'>
            <div className='px-2 py-2 bg-red-50 mt-2 rounded-sm'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300' type="text" placeholder='Enter Email Id' />
          </div>
          <div className='px-2 py-2 bg-red-50 mt-2 rounded-sm'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300' type="text" placeholder='Enter Password' />
          </div>
          </div>
          <div>
            <button className='bg-red-400 hover:bg-red-500 text-sm mt-4 py-2 px-4 text-white rounded-sm'>Login</button>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Login