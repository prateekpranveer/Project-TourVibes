import React, { useEffect } from 'react'
import { X } from 'react-feather'
import { useRouter } from 'next/router'
import Spinner from '../enhancement/Spinner';
import axios from '../../axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Category from '../explore/Category';

interface SignUpModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<{ showing: boolean, modalType: string }>>
}

interface SignUpProps {
  name: string,
  emailId: string,
  password: string,
  confirmPassword: string,
  userName: string,
  userLevel: string,
  phone: string,
}

const SignupModal = ({ setShowModal }: SignUpModalProps) => {

  const router = useRouter();
  const validated = true;
  const [response, setresponse] = React.useState('')
  const [isLogging, setisLogging] = React.useState(false)
  const [newUser, setnewUser] = React.useState<SignUpProps>({
    name: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    userName: '',
    userLevel: '',
    phone: '',
  })

  const {emailIDFound, token} = useSelector((state:RootState) => state.token)

  useEffect(() => {
    console.log(newUser)
  }, [newUser])

  const handleSignUp = async () => {
    setisLogging(true)
    await axios.post('/user/register', newUser).then((res) =>{
      console.log(res)
      alert('You have Successfully Signed Up')
      setShowModal(prevState => ({...prevState, modalType:'Login', showing: true}))
    }).catch((res) => setresponse(res.response.data))
    setisLogging(false)
  }
  return (
    <div className='realtive modal login'>
      <button onClick={() => setShowModal(prevState => ({ ...prevState, showing: false }))} className='text-lg absolute top-6 right-6 rounded-full bg-gray-400 p-2'><X size={15} color='white' /></button>
      <h1 className='text-center text-sm'>New Here?</h1>
      <h1 className='text-center text-xl mb-4'>Let's Register</h1>

      <div className='mt-2'>
        <div className={`px-2 py-2 bg-red-50 mt-2 ${validated ? 'bg-red-100' : 'bg-red-50'} rounded-full`}>
          <input onChange={(e) => setnewUser((prevState) => ({...prevState, name: e.target.value}))} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter Full Name' />
        </div>
        <div className='px-2 py-2 bg-green-50 mt-2 rounded-full'>
          <input onChange={(e) => setnewUser((prevState) => ({...prevState, emailId: e.target.value}))} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter Email Id' />
        </div>
        <div className='px-2 py-2 bg-yellow-50 mt-2 rounded-full'>
          <input onChange={(e) => setnewUser((prevState) => ({...prevState, userName: e.target.value}))} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter an Username' />
        </div>
       
        <div className='px-2 flex items-center py-2 bg-pink-50 mt-2 rounded-full'>
          {/* <div className='text-xs h-full bg-white rounded-full'><h1 className='p-2'>+91</h1></div> */}
          <input onChange={(e) => setnewUser((prevState) => ({...prevState, phone: e.target.value}))} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="text" placeholder='Enter Phone no.' />
        </div>
        <div className='px-2 py-2 bg-gray-100 mt-2 rounded-full'>
          <input onChange={(e) => setnewUser((prevState) => ({...prevState, password: e.target.value}))} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="password" placeholder='Enter Password' />
        </div>
        <div className='px-2 py-2 bg-gray-100 mt-2 rounded-full'>
          <input onChange={(e) => setnewUser((prevState) => ({...prevState, confirmPassword: e.target.value}))} className='border w-full bg-transparent border-none focus:outline-none text-sm font-jost-300 px-2' type="password" placeholder='Confirm Password' />
        </div>
      </div>

      <div>
        <button onClick={handleSignUp} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-sm mt-4 py-2 px-4 text-white rounded-full'>{isLogging ? <div className='flex items-center gap-4'><Spinner size={'sm'} /><h1>Please Wait</h1></div> : <>Register</>}</button>
      </div>
      <div className='res text-red-500 text-sm mt-2'><h1>*{response}</h1></div>

      {/* <div className='mt-4 border flex hover:bg-gray-50 cursor-pointer items-center rounded-full justify-center max-w-fit'>
        <span><img height={40} width={40} src="/google.png" alt="" /></span>
        <h1 className='text-xs px-2 py-1'>Sign In With Gooogle</h1>
      </div> */}

      
      <div>
      </div>
    </div>
  )
}

export default SignupModal