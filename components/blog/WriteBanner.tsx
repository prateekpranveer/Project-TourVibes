import React from 'react'
import {useRouter} from 'next/router';

const WriteBanner = () => {
    const router = useRouter();
  return (
    <div>

        <div className='bg-pink-700 p-12'>
            <div>
                <h1 className='text-3xl max-w-6xl font-rale-300 leading-normal text-slate-200'>Get paid to share your wanderlust with the world - join TourVibes and write about your unforgettable travel experiences!</h1>
            </div>
            <div className='mt-6'>
                <button onClick={() => router.push('/blog/contribution')} className='bg-white px-6 border py-4 hover:border hover:bg-pink-700 font-jost-400 text-pink-700 hover:text-white  rounded-full'>Read More</button>
            </div>
        </div>
        
    </div>
  )
}

export default WriteBanner