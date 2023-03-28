import React from 'react'
import { Plus, Edit2 } from 'react-feather'
import Link from 'next/link'

const User = 'Prateek'

const UserHeader = () => {
  return (
    <div className='mt-8'>
        <div className='flex items-center justify-between'>
            <div className='flex space-x-2 items-center'>
                <img className='w-10 h-10 rounded-full border-2' src="/111.jpg" alt="" />
                <h1 className='font-jost-300'>Hi, <span className='font-jost-300 text-xl'>{User}</span></h1>
            </div>
            <div className='flex space-x-3'>
            <Link href='/admin/dashboard/create-entry'><button className='bg-green-400 font-jost-300 hover:bg-green-600 text-white rounded-sm px-2 py-2 shadow-lg'><Plus/></button></Link>
            <Link href='/admin/dashboard/improve-entry'><button className='bg-red-400 font-jost-300 hover:bg-red-600 text-white rounded-sm px-2 py-2 shadow-lg'><Edit2/></button></Link>
            </div>
        </div>
    </div>
  )
}

export default UserHeader