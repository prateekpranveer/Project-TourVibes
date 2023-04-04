import React from 'react'
import { Minus, Plus } from 'react-feather'

const crucial = [
  {
    desc: "Must carry a minimum of 45 litres rucksack"
  },
  {
    desc: "Must have the Aadhar card or passport if foreigner"
  },
  {
    desc: "Must not carry a child since this is a solo tour"
  },
  {
    desc: "Having a sunglass is cumpolsory"
  },
]

const CreateTourForm = () => {
  return (
    <div>
      <div>
        <div>
          <div><h1 className='text-3xl font-jost-300'>The Amber Lake, <span className='text-gray-600 font-jost-400 text-sm'>Gujrat, India</span></h1></div>
          <div>

            <div className='mt-6 w-full'>
              <div className='crucial-details'>
                <h1 className='font-jost-400 text-white text-sm bg-black rounded-full max-w-fit px-4 py-1'>Crucial Details</h1>
                <ul className='list-disc ml-4 mt-2'>
                  {
                    crucial.map((p) => (
                      <li className='font-jost-400 text-sm text-gray-700'>{p.desc}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='h-12 flex w-full rounded-sm space-x-4 mt-4'>
                <input className='w-full border px-4 font-jost-300' type="text" placeholder='Add a Crucial Details' />
                <button className='text-white flex items-center rounded-sm bg-black p-4'><Plus /></button>
              </div>
            </div>

              <div className='mt-4'>
                  <label className='block font-jost-400 text-sm'>Minimum Number of Members</label>
                  <div className='flex mt-3'>
                    <button className='bg-gray-300 p-4 rounded-sm'><Plus/></button>
                    <span className='flex items-center px-6'>8</span>
                    <button className='bg-gray-300 p-4 rounded-sm'><Minus/></button>
                  </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTourForm