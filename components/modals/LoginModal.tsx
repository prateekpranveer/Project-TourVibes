import React, { useState } from 'react'
import Spinner from '../enhancement/Spinner';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../../store/reducers/tokenReducer';
import { RootState } from '../../store/store';
import { X } from 'react-feather';

const isLogging = false;
const userLevel = 2;

interface LoginModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<{showing: boolean, modalType: string}>>
}

const LoginModal = ({setShowModal}: LoginModalProps) => {
  const [isLogging, setisLogging] = useState(false)

  const dispatch = useDispatch();
  const tokenState = useSelector((state: RootState) => state.token)

  const router = useRouter();

  // Actual Login Functionalty from the Backend Server

  const handleLogin = async () => {
    dispatch({
      type: LOGIN_REQUEST,
    })
    setisLogging(true);
    await axios.post('/user/login', {
      emailId: "dikshant@gmail.com",
      password: "protik"
    }).then(res => {
      if (res.data.token) {
        window.localStorage.setItem('Token', res.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.token
        })
      }
      else {
        dispatch({
          type: LOGIN_ERROR,
          payload: res.data
        })
      }
    }).then(() => setisLogging(false))
  }



  return (
    <div className='realtive modal login'>
      <button onClick={() => setShowModal(prevState => ({...prevState,showing: false}))} className='text-lg absolute top-6 right-6 rounded-full bg-gray-400 p-2'><X size={15} color='white'/></button>
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
        <button onClick={handleLogin} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-sm mt-4 py-2 px-4 text-white rounded-full'>{isLogging ? <div className='flex items-center gap-4'><Spinner /><h1>Loading</h1></div> : <>Login</>}</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default LoginModal