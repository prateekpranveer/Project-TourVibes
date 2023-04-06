import React from 'react'
import CreatePlaceForm from '../../../components/admin/dashboard/core/CreatePlaceForm'
import UserHeader from '../../../components/admin/dashboard/core/UserHeader'
import Link from 'next/link'
import { Plus, Edit2 } from 'react-feather'

const index = () => {
  return (
    <div className='max-w-9xl m-auto p-4'>
        <div className=''>
          <UserHeader/>
          <div className='flex space-x-3 mt-4'>
            <Link href='/admin/dashboard/create-entry'><button className='bg-green-400 flex space-x-2 font-jost-300 hover:bg-green-600 text-white rounded-sm px-2 py-2 shadow-lg'><span>Create Entry</span><Plus/></button></Link>
            <Link href='/admin/dashboard/improve-entry'><button className='bg-red-400 flex space-x-2 font-jost-300 hover:bg-red-600 text-white rounded-sm px-2 py-2 shadow-lg'><span>Edit Entry</span><Edit2/></button></Link>
            </div>
        </div>
    </div>
  )
}

export default index