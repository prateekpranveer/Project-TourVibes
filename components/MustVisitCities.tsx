import React from 'react'

const MustVisit = () => {
  return (
    <div>
        <div>
            <div className='mt-8'>
                <div className='py-8 font-jost-300'>
                    <h1 className='text-2xl'>Must Visit Attractions</h1>
                </div>

                <div className='flex flex-wrap gap-10'>
                    
                <div className='relative flex-grow xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3'>
                    <div className='w-70 h-40 overflow-hidden bg-red-200'>
                        <img className='w-full h-full object-cover' src='/111.jpg' alt="" />
                    </div>
                    <div className='py-4 px-1'>
                        <h1 className='font-jost-300 text-xl'>The Amer Fort</h1>
                        <p className='text-sm font-jost-400 text-gray-500'>Jaipur, Rajasthan</p>
                    </div>
                    <div className='bg-blue-50 w-12 h-12 -top-2 -right-2 rounded-full absolute flex justify-center items-center text-black font-jost-400'>4</div>
                </div>

                <div className='relative flex-grow xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3'>
                    <div className='w-70 h-40 overflow-hidden bg-red-200'>
                        <img className='w-full h-full object-cover' src='/222.jpg' alt="" />
                    </div>
                    <div className='py-4 px-1'>
                        <h1 className='font-jost-300 text-xl'>The Amer Fort</h1>
                        <p className='text-sm font-jost-400 text-gray-500'>Jaipur, Rajasthan</p>
                    </div>
                    <div className='bg-blue-50 w-12 h-12 -top-2 -right-2 rounded-full absolute flex justify-center items-center text-black font-jost-400'>12</div>
                </div>

                <div className='relative flex-grow xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3'>
                    <div className='w-70 h-40 overflow-hidden bg-red-200'>
                        <img className='w-full h-full object-cover' src='/112.jpg' alt="" />
                    </div>
                    <div className='py-4 px-1'>
                        <h1 className='font-jost-300 text-xl'>The Amer Fort</h1>
                        <p className='text-sm font-jost-400 text-gray-500'>Jaipur, Rajasthan</p>
                    </div>
                </div>

                <div className=' relative flex-grow xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3'>
                    <div className='w-70 h-40 overflow-hidden bg-red-200'>
                        <img className='w-full h-full object-cover' src='/113.jpg' alt="" />
                    </div>
                    <div className='py-4 px-1'>
                        <h1 className='font-jost-300 text-xl'>The Amer Fort</h1>
                        <p className='text-sm font-jost-400 text-gray-500'>Jaipur, Rajasthan</p>
                    </div>
                </div>

                <div className='relative flex-grow xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3'>
                    <div className='w-70 h-40 overflow-hidden bg-red-200'>
                        <img className='w-full h-full object-cover' src='/114.jpg' alt="" />
                    </div>
                    <div className='py-4 px-1'>
                        <h1 className='font-jost-300 text-xl'>The Amer Fort</h1>
                        <p className='text-sm font-jost-400 text-gray-500'>Jaipur, Rajasthan</p>
                    </div>
                </div>

                </div>

            </div>   
        </div>
    </div>
  )
}

export default MustVisit