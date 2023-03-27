import React from 'react'
import Link from 'next/link'
import LoginModal from './LoginModal'

type LoginProps = {
  loginModal: boolean,
  setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>> 
}

const Login = ({loginModal,setLoginModal, setSignUpModal}:LoginProps) => {
  return (
    <div className='relative'>
      <div>
      <button onClick={()=>{
        setLoginModal(!loginModal);
        setSignUpModal(false);
      }} className='border px-4 h-8 rounded-full text-sm'>Login</button>
      </div>

      <div className={`absolute ${loginModal==false?'hidden':''} bg-white mt-6 shadow-lg w-80 rounded-xl right-0 px-8 py-8`}>
        <LoginModal/>
      </div>    
    </div>
  )
}

export default Login