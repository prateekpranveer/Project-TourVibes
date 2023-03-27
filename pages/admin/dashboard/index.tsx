import React from 'react'
import CreatePlaceForm from '../../../components/admin/dashboard/core/CreatePlaceForm'
import UserHeader from '../../../components/admin/dashboard/core/UserHeader'

const index = () => {
  return (
    <div className='max-w-9xl m-auto p-4'>
        <div className=''>
          <UserHeader/>
          <CreatePlaceForm/>
        </div>
    </div>
  )
}

export default index