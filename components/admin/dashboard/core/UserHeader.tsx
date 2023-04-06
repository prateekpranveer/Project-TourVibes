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
        </div>
    </div>
  )
}

export default UserHeader