import React from 'react'
import Spinner from '../../../enhancement/Spinner'
import TravelEditor from './TravelEditor'
import { useState } from 'react'

const CreatePlaceForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  return (
    <div className=''>
      <div className='mt-10'>
        <h1 className='font-jost-300 text-3xl'>Create Place Entry into the Database</h1>
      </div>
      <div className='fields w-full font-jost-300'>
        <div className='w-full border border-gray-400 h-12 mt-4 rounded-sm flex items-center p-4'><input className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter the Place Name' /></div>
        <div className='w-full border border-gray-400 h-12 mt-4 rounded-sm flex items-center p-4'><input className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter the Address Separated by Comma' /></div>
        <div className='w-full border border-gray-400 h-12 mt-4 rounded-sm flex items-center p-4'><input className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter Slug' /></div>
        
        <select id="countries" className="bg-gray-50 focus:outline-none mt-4 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Hills</option>
          <option value="US">Forest</option>
          <option value="CA">Forts</option>
          <option value="FR">Museum</option>
          <option value="DE">Architecture</option>
        </select>

        

        <div className='w-full min-h-fit mt-4 rounded-sm flex items-center'><TravelEditor /></div>
        <button onClick={() => setisSubmitting(!isSubmitting)} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-md mt-4 py-2 px-4 text-white rounded-sm'>{isSubmitting ? <div className='flex items-center gap-4'><Spinner /><h1 className=''>Loading</h1></div> : <>Submit</>}</button>
      </div>
    </div>
  )
}

export default CreatePlaceForm