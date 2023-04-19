import { useRouter } from 'next/router'
import React from 'react'
import { Plus } from 'react-feather'

const Banner = () => {
    const router = useRouter();
  return (
    <div>
        <div className='bg-blue-50 rounded-sm px-12 py-24'>
            <div className='font-rale-300'>
                <h1 className=' text-5xl max-w-3xl leading-snug text-gray-800'>Explore India with Like Minded Travellers</h1>
                <div className='flex flex-wrap gap-6 mt-8'>
                    <button className='bg-gray-200 min-w-fit px-6 py-4 hover:bg-gray-300 rounded-full flex space-x-4'><span>Create Tour</span><span><Plus color='gray'/></span></button>
                    <button className='bg-gray-200 min-w-fit px-6 py-4 hover:bg-gray-300 rounded-full flex space-x-4'><span>Join Tour</span><span><Plus color='gray'/></span></button>
                </div>
                </div>
        </div>
        <div>
            <div onClick={() => router.push('/architecture')} className='font-rale-300 text-3xl p-12 bg-blue-600 hover:bg-blue-800 text-white mt-10 flex items-center justify-center rounded-md'>
                <button><h1 className='tracking-wider'>Explore our Destination Directory</h1></button>
            </div>
        </div>
    </div>
  )
}

export default Banner