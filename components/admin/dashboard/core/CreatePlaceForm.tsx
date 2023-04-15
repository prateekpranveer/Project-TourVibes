import React, { useEffect, useRef } from 'react'
import Spinner from '../../../enhancement/Spinner'
import { useState } from 'react'
import { Plus } from 'react-feather'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { EditorState } from 'react-draft-wysiwyg'


const CreatePlaceForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const [editor, setEditor] = useState(null);
  const [checkPoint, setCheckPoint] = useState('')
  
  const [entryState, setentryState] = useState<any>({
    Checkpoints: [],
    name: "",
    address: "",
    category: "",
    desc: '',
  })

  const handleChange = (value: string) => {
    setentryState({...entryState, desc:value})
  }

  const handleCheckPoint = () => {
    if (checkPoint) {
      const array = entryState.Checkpoints;
      const newArray = array.push(checkPoint);
      setentryState((entryState:any) => entryState.Checkpoints = newArray);
    }
    console.log(entryState)
  }


  return (
    <div className=''>
      <div className='mt-4'>
        <h1 className='font-jost-400 text-xl mb-6'>Create Place Entry into the Database</h1>
      </div>


      <div className='mt-6 w-full'>
              <div className='crucial-details'>
                <h1 className='font-jost-400 text-white text-sm bg-black rounded-full max-w-fit px-4 py-1'>Checkpoints</h1>
                <ul className='list-disc ml-4 mt-2'>
                  {
                    entryState.Checkpoints?.map(({p}:any) => (
                      <li className='font-jost-400 text-sm text-gray-700'>{p}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='h-12 flex w-full rounded-sm space-x-4 mt-4'>
                <input onChange={(e) => {
                  setCheckPoint((checkPoint) => checkPoint= e.target.value)
                  console.log(checkPoint)
              }} className='w-full border text-sm px-4 font-jost-300' type="text" placeholder='Add a Checkpoint' />
                <button onClick={handleCheckPoint} className='text-white flex items-center rounded-sm bg-black p-4'><Plus /></button>
              </div>
            </div>



      <div className='fields w-full font-jost-400'>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input onChange={(e) => {
          setentryState({...entryState, name:e.target.value});
          console.log(entryState);
          }} className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter the Place Name' /></div>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter the Address Separated by Comma' /></div>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter Slug' /></div>
        
        <select id="countries" onChange={(e) => {
          setentryState((entryState: { category: any }) => entryState.category = e.target.value);
          console.log(entryState)
        }} className="bg-gray-100 focus:outline-none mt-4 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
          <option selected>Hills</option>
          <option value="US">Forest</option>
          <option value="CA">Forts</option>
          <option value="FR">Museum</option>
          <option value="DE">Architecture</option>
        </select>

        <div className='w-full min-h-fit mt-4 rounded-sm flex items-center'><ReactQuill theme='snow' value={entryState.desc} onChange={handleChange}/></div>
        <button onClick={() => setisSubmitting(!isSubmitting)} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-md mt-4 py-2 px-4 text-white rounded-sm'>{isSubmitting ? <div className='flex items-center gap-4'><Spinner /><h1 className=''>Loading</h1></div> : <>Submit</>}</button>
      </div>
    </div>
  )
}

export default CreatePlaceForm