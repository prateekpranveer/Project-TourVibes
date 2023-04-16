import React, { ChangeEvent, useEffect } from 'react'
import Spinner from '../../../enhancement/Spinner'
import { useState } from 'react'
import { Plus, X } from 'react-feather'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import axios from '../../../../axios';
import { useRouter } from 'next/router';

interface EntryStateProps {
  checkPoints: string[];
  name: string;
  address: string;
  slug: string;
  category: string;
  desc: string;
  _id: string
}


const CreatePlaceForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const [editor, setEditor] = useState(null);
  const [checkPoint, setCheckPoint] = useState<string>('')

  const router = useRouter();
  console.log(router.query)

  const getPlaceDataEditing = async () => {
    if (router.query.edit) {
      const placeData = await axios.get(`/place/${router.query.edit}`)
      console.log(placeData.data)
      setentryState(placeData.data)
    }
  }

  useEffect(() => {
    getPlaceDataEditing()
  }, [])

  const [entryState, setentryState] = useState<EntryStateProps>({
    checkPoints: [],
    name: "",
    address: "",
    slug: "",
    category: "",
    desc: '',
    _id: ''
  })

  const handleChange = (value: string) => {
    setentryState({ ...entryState, desc: value })
    console.log(entryState)
  }

  const handleCheckPoint = () => {
    const CheckPointsArray = entryState.checkPoints;
    CheckPointsArray.push(checkPoint);
    setentryState({ ...entryState, checkPoints: CheckPointsArray });
    console.log(entryState)
  }


  function handleCategory(event: ChangeEvent<HTMLSelectElement>): void {
    setentryState({ ...entryState, category: event.target.value })
  }

  const removeCheckPoint = (id: number) => {
    const CheckPointsArray = entryState.checkPoints;
    CheckPointsArray.splice(id, id + 1);
    setentryState({ ...entryState, checkPoints: CheckPointsArray });
  }

  const handleSubmit = async () => {
    setisSubmitting(true);
    try {
      await axios.post('/place/create', entryState).then(res => console.log(res))
      setisSubmitting(false);
      router.push('/admin/dashboard')

    } catch {
      setisSubmitting(false);

    }
  }

  return (
    <div className=''>
      <div className='mt-4'>
        <h1 className='font-jost-400 text-xl mb-6'>Create Place Entry into the Database</h1>
      </div>

      <div className='mt-6 w-full'>
        <div className='crucial-details'>
          <h1 className='font-jost-400 text-white text-sm bg-black rounded-full max-w-fit px-4 py-1'>Checkpoints {entryState.checkPoints?.length}</h1>
          <ul className='list-disc ml-4 mt-4 mb-4 space-y-2 font-jost-400'>
            {
              entryState.checkPoints?.map((p, id) => (
                <>
                  <div className='flex items-center space-x-3'>
                    <li>{p}</li>
                    <div onClick={() => removeCheckPoint(id)} className='bg-gray-200 p-2 rounded-full'>
                      <X size={10} />
                    </div>
                  </div>
                </>
              ))
            }
          </ul>
        </div>
        <div className='h-12 flex w-full rounded-sm space-x-4 mt-4'>
          <input onChange={(e) => {
            setCheckPoint((checkPoint) => checkPoint = e.target.value)
            console.log(checkPoint)
          }} className='w-full border text-sm px-4 font-jost-300' type="text" placeholder='Add a Checkpoint' />
          <button onClick={handleCheckPoint} className='text-white flex items-center rounded-sm bg-black p-4'><Plus /></button>
        </div>
      </div>



      <div className='fields w-full font-jost-400'>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input onChange={(e) => {
          setentryState({ ...entryState, name: e.target.value });
          console.log(entryState);
        }} className='w-full focus:outline-none bg-trasparent' type="text" placeholder={entryState.name} /></div>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input onChange={(e) => setentryState({ ...entryState, address: e.target.value })} className='w-full focus:outline-none bg-trasparent' type="text" placeholder={entryState.adress} /></div>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input onChange={(e) => setentryState({ ...entryState, slug: e.target.value })} className='w-full focus:outline-none bg-trasparent' type="text" placeholder={entryState.slug} /></div>

        <select id="countries" onChange={handleCategory} className="bg-gray-100 focus:outline-none mt-4 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
          <option selected>Hills</option>
          <option>Forest</option>
          <option>Forts</option>
          <option>Museum</option>
          <option>Architecture</option>
        </select>

        <div className='w-full min-h-fit mt-4 rounded-sm flex items-center'><ReactQuill style={{ height: '30vh', width: '100%' }} theme='snow' value={entryState.desc} onChange={handleChange} /></div>
        <button onClick={handleSubmit} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-md mt-14 py-2 px-4 text-white rounded-sm'>{isSubmitting ? <div className='flex items-center gap-4'><Spinner /><h1 className=''>Loading</h1></div> : <>Submit</>}</button>
      </div>
    </div>
  )
}

export default CreatePlaceForm