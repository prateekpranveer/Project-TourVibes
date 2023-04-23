import React, { useEffect, useState } from 'react'
import Spinner from '../enhancement/Spinner';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../../store/reducers/tokenReducer';
import { RootState } from '../../store/store';
import { X } from 'react-feather';

interface LoginDataProps {
  email: string,
  password: string
}

interface LoginModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<{ showing: boolean, modalType: string }>>
}


const LoginModal = ({ setShowModal }: LoginModalProps) => {

  const [isLogging, setisLogging] = useState(false)
  const [loginData, setLoginData] = useState<LoginDataProps>({
    email: "",
    password: ""
  })

  // inporting hooks
  const dispatch = useDispatch();
  const router = useRouter();
  const tokenState = useSelector((state: RootState) => state.token)
  // Actual Login Functionalty from the Backend Server
  const handleLogin = async () => {
    setisLogging(true);
    dispatch({
      type: LOGIN_REQUEST,
    })
    await axios.post('/user/login', {
      emailId: loginData.email,
      password: loginData.password
    }).then(res => {
      if (res.data.token) {
        console.log(res.data)
        window.localStorage.setItem('my-app-token', res.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
        setShowModal(prevState => ({...prevState, showing: false}))
      }
    }).catch(err => {
      setisLogging(false)
      console.log(err.response.data)
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data
      })
    })
  }

  const handleLoginEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prevState) => ({ ...prevState, email: e.target.value }))
  }

  const handleLoginPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prevState) => ({ ...prevState, password: e.target.value }))
  }

  return (
    <div className='realtive modal login'>
      <button onClick={() => setShowModal(prevState => ({ ...prevState, showing: false }))} className='text-lg absolute top-6 right-6 rounded-full bg-gray-400 p-2'><X size={15} color='white' /></button>
      <h1 className='text-center text-xl mb-4'>LogIn</h1>
      <div className='mt-2'>
        <div className='px-2 py-2 bg-red-50 mt-2 rounded-full'>
          <input onChange={(e) => handleLoginEmailChange(e)} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter Email Id' />
        </div>
        <div className='px-2 py-2 bg-blue-50 mt-2 rounded-full'>
          <input onChange={(e) => handleLoginPasswordChange(e)} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="password" placeholder='Enter Password' />
        </div>
      </div>
      <div>
        <button onClick={handleLogin} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-sm mt-4 py-2 px-4 text-white rounded-full'>{isLogging ? <div className='flex items-center gap-4'><Spinner  size={'sm'} /><h1>Loading</h1></div> : <>Login</>}</button>
      </div>

      <div className='mt-2 text-sm text-red-500'>{tokenState.error?<h1>{tokenState.error}</h1>:<></>}</div>
    </div>
  )
}

export default LoginModal