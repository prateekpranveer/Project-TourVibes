import React from 'react'
import CreatePlaceForm from '../../../components/admin/dashboard/core/CreatePlaceForm'
import UserHeader from '../../../components/admin/dashboard/core/UserHeader'
import axios from '../../../axios'

const CreateEntry = () => {

  return (
    <div className='max-w-9xl m-auto p-4'>
        <div className=''>
          <CreatePlaceForm/>
        </div>
    </div>
  )
}

export default CreateEntry