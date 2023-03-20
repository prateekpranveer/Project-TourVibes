import React from 'react'
import Link from 'next/link'
import Login from './modals/Login'
import { useState } from 'react'
import Signup from './modals/Signup'

export interface LoginModal {
  state: boolean,
}

interface SignUpModal {
  state: boolean,
}


const Header = () => {

  const [LoginModal, setLoginModal] = useState<LoginModal>({state: false})
  const [SignUpModal, setSignUpModal] = useState(false)

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
              <Link href='/explore-places'><li className='border-b-2 text-sm border-solid border-gray-700'>Explore Places</li></Link>
            </ul>
          </div>
        </div>

        <div className='w-40 flex min-w-fit space-x-2 justify-between'>
          <Login setSignUpModal = {setSignUpModal}  loginModal = {LoginModal} setLoginModal = {setLoginModal}/>
          <Signup setLoginModal = {setLoginModal} SignUpModal = {SignUpModal} setSignUpModal = {setSignUpModal}/>


        </div>
      </div>
    </div>
  )
}

export default Header