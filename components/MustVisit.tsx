import React from 'react'

const MustVisit = () => {
  return (
    <div>
        <div>
            <div className='mt-2'>
                <div className='py-8 font-jost-300'>
                    <h1 className='text-2xl'>Featured Places</h1>
                </div>

                <div className='flex flex-wrap gap-10'>

                        <div className='w-72 flex hover:shadow-sm hover:cursor-pointer p-4 items-center'>
                            <div className='left bg-green-200 flex items-center p-4 rounded-full'>
                                <h1>36</h1>
                            </div>
                            <div className='right flex flex-col ml-4 justify-center'>
                                <div className='top font-jost-400 text-gray-700 text-xl'>Taj Mahal</div>
                                <div className='bottom text-sm font-jost-300'>Agra, New Delhi</div>
                            </div>
                        </div>
                        <div className='w-72 h-16 flex hover:shadow-md  p-2'>
                            <div className='left bg-green-200 flex items-center p-6 rounded-full'>
                                <h1>11</h1>
                            </div>
                            <div className='right flex flex-col ml-4 justify-center'>
                                <div className='top font-jost-400 text-gray-700 text-xl'>Batasia Loop</div>
                                <div className='bottom text-sm font-jost-300'>Darjelling, West Bengal</div>
                            </div>
                        </div>
                        <div className='w-72 h-16 flex hover:shadow-md  p-2'>
                            <div className='left bg-green-200 flex items-center p-6 rounded-full'>
                                <h1>2</h1>
                            </div>
                            <div className='right flex flex-col ml-4 justify-center'>
                                <div className='top font-jost-400 text-gray-700 text-xl'>Howrah Station</div>
                                <div className='bottom text-sm font-jost-300'>Howrah, West Bengal</div>
                            </div>
                        </div>
                        <div className='w-72 h-16 flex hover:shadow-md  p-2'>
                            <div className='left bg-green-200 flex items-center p-6 rounded-full'>
                                <h1>12</h1>
                            </div>
                            <div className='right flex flex-col ml-4 justify-center'>
                                <div className='top font-jost-400 text-gray-700 text-xl'>Pink City</div>
                                <div className='bottom text-sm font-jost-300'>Jaipur, Rajasthan</div>
                            </div>
                        </div>
                    

                </div>

            </div>   
        </div>
    </div>
  )
}

export default MustVisit