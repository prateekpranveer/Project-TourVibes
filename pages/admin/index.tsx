import React from 'react'
import BackHeader from '../../components/admin/BackHeader'
import AdminLogin from '../../components/admin/AdminLogin'

const index = () => {
  return (
    <div className=''>
        <div className='max-w-9xl m-auto px-4'>
          <div className='mt-10 m-auto p-20'></div>
            <BackHeader/>
            <AdminLogin/>
        </div>
    </div>
  )
}

export default index