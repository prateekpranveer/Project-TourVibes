import React from 'react'
import Link from 'next/link'
import { X } from 'react-feather'
import Spinner from '../enhancement/Spinner';

interface SignUpModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<{showing: boolean, modalType: string}>>
}

const isLogging = true;

const SignupModal = ({setShowModal}: SignUpModalProps) => {

  const handleSignUp = () => {

  }
  return (
    <div className='realtive modal login'>
      <button onClick={() => setShowModal(prevState => ({...prevState,showing: false}))} className='text-lg absolute top-6 right-6 rounded-full bg-gray-400 p-2'><X size={15} color='white'/></button>
      <h1 className='text-center text-sm'>New Here?</h1>
      <h1 className='text-center text-xl mb-4'>Let's Register</h1>

      <div className='mt-2'>
        <div className='px-2 py-2 bg-red-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter Email Id' />
        </div>
        <div className='px-2 py-2 bg-red-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Password' />
        </div>
        <div className='px-2 py-2 bg-blue-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Confirm Password' />
        </div>
      </div>

      <div>
        <button onClick={handleSignUp} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-sm mt-4 py-2 px-4 text-white rounded-full'>{isLogging ? <div className='flex items-center gap-4'><Spinner/><h1>Loading</h1></div> : <>Login</>}</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default SignupModal