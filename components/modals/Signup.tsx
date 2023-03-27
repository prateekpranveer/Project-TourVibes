import React from 'react'
import Link from 'next/link'

type SignUpProps = {
  SignUpModal: boolean,
  setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>> 
}

const Signup = ({SignUpModal, setSignUpModal, setLoginModal}: SignUpProps) => {
  return (
    <div className='relative'>

      <div>
      <button onClick={()=>{
        setSignUpModal(!SignUpModal)
        setLoginModal(false);
      }} className=' bg-blue-400 hover:bg-blue-600 px-4 h-8 rounded-full text-white text-sm'>Register</button>
      </div>

      <div className={`absolute ${SignUpModal==false?'hidden':''} bg-white mt-6 shadow-lg rounded-xl w-80 right-0 px-8 py-8`}>
        <div className='modal login'>
            <p className='text-center text-sm font-jost-300'>New Here?</p>
          <h1 className='text-center text-xl mb-4'>SignUp</h1>
          <div className='mt-2'>
            <div className='px-2 py-2 bg-red-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent focus:outline-none text-sm border-none font-jost-300 px-2' type="text" placeholder='Enter Email Id' />
          </div>
          <div className='px-2 py-2 bg-blue-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent focus:outline-none text-sm border-none font-jost-300 px-2' type="text" placeholder='Password' />
          </div>
          <div className='px-2 py-2 bg-blue-50 mt-2 rounded-full'>
          <input className='border w-full bg-transparent focus:outline-none text-sm border-none font-jost-300 px-2' type="text" placeholder='Confirm Password' />
          </div>
          </div>
          <div>
            <button className='bg-blue-400 hover:bg-blue-500 mt-4 py-2 px-4 text-white text-sm rounded-full'>Register</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Signup