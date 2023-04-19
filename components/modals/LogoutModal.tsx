import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { LOGOUT } from '../../store/reducers/tokenReducer'
import { Activity, Circle, Tool } from 'react-feather'
import Link from 'next/link'

const LogoutModal = () => {
const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch({
            type: LOGOUT
        })
    }
  return (
    <div className='absolute top-6 w-32 rounded-lg z-40 right-8 shadow-lg bg-gray-100'>
        <div className='px-4 py-4'>
            <div className='menu py-4'>
                <div className='menu'>
                    <ul className='flex flex-col space-y-2'>
                        <Link href='/profile'><li className='flex space-x-2 items-center'><Circle size={15}/><span className='text-sm'>Profile</span></li></Link>
                        <Link href='/active-tours'><li className='flex space-x-2 items-center'><Activity size={15}/><span className='text-sm'>Your Tours</span></li></Link>
                        <Link href='/admin/dashboard'><li className='flex space-x-2 items-center'><Tool size={15}/><span className='text-sm'>Dashboard</span></li></Link>
                    </ul>
                </div>
            </div>
        <button onClick={handleLogout} className='px-4 py-2 text-sm bg-red-200 rounded-md'>Logout</button>
        </div>
    </div>
  )
}

export default LogoutModal