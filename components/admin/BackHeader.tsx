import React from 'react'
import Login from '../modals/Login'
import LoginModal from '../modals/LoginModal'

const BackHeader = () => {
  return (
    <div className='w-full'>
          <div className='m-auto w-full h-20 flex items-center justify-center'>
            <img src="/logo.png" alt="" />
          </div>
          <div>
            <div className='p-10 shadow-lg rounded-xl w-80 bg-white m-auto'>
                <LoginModal/>
            </div>
          </div>
    </div>
  )
}

export default BackHeader