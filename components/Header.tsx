import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Signup from './modals/SignupModal'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Modal from './modals/Modal'
import LogoutModal from './modals/LogoutModal'

interface ModalProps {
  modalType: string,
  showing: boolean
}

const Header = () => {
  const token = useSelector((state:RootState) => state.token.token)
  const [showModal, setShowModal] = useState<ModalProps>({
    modalType: 'Login',
    showing: false
  })

  return (
    <div className='h-20 m-auto mt-5 flex justify-between items-center'>
      <div>
        <div className='m-auto flex justify-center items-center rounded-md'>
         <img src="/logo.png" alt="" />
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

        {
          !token?<>
          <div className='w-40 flex space-x-2 justify-between items-center'>
          <button className='text-sm border-b-2 border-gray-500' onClick={() => setShowModal(prevState => ({...prevState, modalType: 'Signup', showing: true}))}>Register</button>
          <button className='rounded-sm bg-sky-400 text-white px-4 py-2 text-sm' onClick={() => setShowModal(prevState => ({...prevState, modalType: 'Login', showing: true}))}>Login</button>
          <Modal modalType={showModal.modalType} showModal = {showModal.showing} setShowModal={setShowModal}/>
        </div>
          </>:
          <div className='w-40 flex space-x-2 items-center'>
          <h1 className='text-sm'>Hi, Prateek Kumar</h1>
          <LogoutModal />
        </div>
        }

        


      </div>
    </div>
  )
}

export default Header