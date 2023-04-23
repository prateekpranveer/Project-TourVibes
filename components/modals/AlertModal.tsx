import React from 'react'
import { X } from 'react-feather'

const AlertModal = () => {
  return (

        <div className='fixed rounded-lg py-4 top-3 right-3 px-4 shadow-lg transition duration-200 bg-pink-200 max-h-fit flex items-center space-x-4'>
            <div className='px-4 text-gray-600 font-jost-400'><h1>Kindly Login Before Doing any Changes</h1></div>
            <button className='top-4 right-4 bg-gray-200 rounded-full p-2'><X size={15}/></button>
        </div>
    
  )
}

export default AlertModal