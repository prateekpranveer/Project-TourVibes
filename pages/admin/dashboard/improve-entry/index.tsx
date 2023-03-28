import React from 'react'
import PlaceTable from '../../../../components/admin/dashboard/core/PlaceTable'
import UserHeader from '../../../../components/admin/dashboard/core/UserHeader'
import Header2 from '../../../../components/Header2'
import LongSearch from '../../../../components/LongSearch'

const ImproveEntry = () => {
  return (
    <div>
        <div className='max-w-9xl m-auto p-4'>
            <UserHeader/>
            <div className='mt-8'>
                <Header2/>
            </div>
            <div className='mt-10'>
                <PlaceTable/>
            </div>
        </div>
    </div>
  )
}

export default ImproveEntry