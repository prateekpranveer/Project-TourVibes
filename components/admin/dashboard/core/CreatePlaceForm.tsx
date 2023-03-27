import React from 'react'
import TravelEditor from './TravelEditor'

const CreatePlaceForm = () => {
  return (
    <div className=''>
        <div className='mt-10'>
            <h1 className='font-jost-300 text-3xl'>Create Place Entry into the Database</h1>
        </div>
        <div className='fields w-full font-jost-300'>
            <div className='w-full border h-12 mt-4 rounded-sm flex items-center p-4'><input className='w-full focus:outline-none bg-transparent' type="text" placeholder='Enter the Place Name' /></div>
            <div className='w-full border h-12 mt-4 rounded-sm flex items-center p-4'><input className='w-full focus:outline-none bg-transparent' type="text" placeholder='Enter the Address Separated by Comma' /></div>
            <div className='w-full min-h-fit mt-4 rounded-sm flex items-center'><TravelEditor/></div>
        </div>
    </div>
  )
}

export default CreatePlaceForm