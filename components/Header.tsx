import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Modal from './modals/Modal'
import { Settings } from 'react-feather'
import LogoutModal from './modals/LogoutModal'

interface ModalProps {
  modalType: string,
  showing: boolean
}

const Header = () => {
  const {emailIDFound, token} = useSelector((state:RootState) => state.token)
  const [logoutModal, setlogoutModal] = useState(false)
  const [showModal, setShowModal] = useState<ModalProps>({
    modalType: 'Login',
    showing: false
  })

  return (

    <div className='h-20 m-auto mt-2 flex justify-between items-center'>
      <div>
        <div className='m-auto flex justify-center items-center rounded-md'>
         <img src="/logo.png" alt="" />
         <div className='ml-3 font-jost-400 rounded-full text-xl text-slate-600 p-2'><h1>TourTribes</h1></div>
        </div>
      </div>
      <div className='font-jost-400 text-gray-600 flex items-center'>

        {
          !token?<>
          <div className='w-32 flex justify-between items-center'>
          <button className='text-sm' onClick={() => setShowModal(prevState => ({...prevState, modalType: 'Signup', showing: true}))}>Register</button>
          <button className='rounded-full bg-blue-400 text-white px-4 py-2 text-sm' onClick={() => setShowModal(prevState => ({...prevState, modalType: 'Login', showing: true}))}>Login</button>
          <Modal modalType={showModal.modalType} showModal = {showModal.showing} setShowModal={setShowModal}/>
        </div>
          </>:
          <div className='w-40 flex space-x-4 relative items-center'>
          <h1 className='text-sm'>Hi, {emailIDFound.name}</h1>
          <Settings className='cursor-pointer' onClick={() => setlogoutModal(!logoutModal)} size={20}/>
          {logoutModal&&<LogoutModal/>}
        </div>
        }

        


      </div>
    </div>
  )
}

export default Header