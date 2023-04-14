import React from 'react'
import LoginModal from './LoginModal'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Settings } from 'react-feather'
import Link from 'next/link'

const LogOutModalOpen = false;



const LogoutModal = ({loginModal,setLoginModal, setSignUpModal}:any) => {
  return (

    <>
    <div className='relative'>
       <div> <Settings size={20}/> </div>

       {
        LogOutModalOpen && <><div className='absolute right-1 top-8 p-4 w-40 bg-white shadow-lg rounded-md'>
        <div>
            <div>
                <ul>
                    <li className='py-1 cursor-pointer hover:text-yellow-500'>My Profile</li>
                    <Link href='/admin/dashboard'><li className='py-1 cursor-pointer hover:text-yellow-500'>Dashboard</li></Link>
                    <li className='py-1 cursor-pointer hover:text-yellow-500'>Create Tour</li>
                </ul>
            </div>
            <div className='mt-4'><button className='bg-red-600 text-white px-3 rounded-md py-2'>Logout</button></div>
        </div>
       </div>
       </>
       }

       

    </div>
    </>
    // <div className='relative'>
    //   {!tokenState.token?<>
    //     <div>
    //   <button onClick={()=>{
    //     setLoginModal(!loginModal);
    //     setSignUpModal(false);
    //   }} className='border px-4 h-8 rounded-full text-sm'>Login</button>
    //   </div>

    //   <div className={`absolute ${loginModal==false?'hidden':''} bg-white mt-6 shadow-lg w-80 rounded-xl right-0 px-8 py-8`}>
    //     <LoginModal/>
    //   </div> 
    //   </>: <><div className='font-jost-400 text-sm rounded-full flex space-x-2 items-center'>
    //     <h1 className=''>Prateek Pranveer</h1>
    //     <Settings size={20}/>
    //   </div></>
    //   }   
    // </div>
  )
}

export default LogoutModal