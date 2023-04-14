import React from 'react'

const Listing = () => {
    
  return (
    <div>
        <div>
            <div className='max-w-9xl m-auto p-4 mt-10'>
                <div className='font-rale-800 text-gray-600 text-2xl tracking-wider max-w-fit'><h1>Pick Problems</h1></div>
                
                <div className=''>
                    <div className='mt-6 p-4 rounded-sm  font-jost-300 border'>
                        <input type="text" placeholder='Find Your Expertise' className='w-full bg-transparent' />
                    </div>
                </div>
                
                <div className='mt-12 flex px-4 py-4 rounded-sm justify-between items-center'>
                    <div className='font-jost-400 text-gray-700 tracking-tight'><h1>Push the Search bar to action</h1></div>
                    <div className='left flex space-x-3'>
                        <button className='bg-sky-400 rounded-sm text-xs text-white px-4 py-2'>Contribute</button>
                    </div>
                </div>

                <div className='mt-6 flex px-4 py-4 justify-between items-center'>
                    <div className='font-jost-400 text-gray-700 tracking-tight'><h1>Create a navigation menu for the backend</h1></div>
                    <div className='left flex space-x-3'>
                        <button className='bg-sky-400 rounded-sm text-xs text-white px-4 py-2'>Contribute</button>
                    </div>
                </div>

                <div className='mt-6 flex px-4 py-4 justify-between items-center'>
                    <div className='font-jost-400 text-gray-700 tracking-tight'><h1>Write authentication endpoints</h1></div>
                    <div className='left flex space-x-3'>
                       
                        <button className='bg-sky-400 rounded-sm text-xs text-white px-4 py-2'>Contribute</button>
                    </div>
                </div>

                <div className='mt-6 flex px-4 py-4 justify-between items-center'>
                    <div className='font-jost-400 text-gray-700 tracking-tight'><h1>Create Login Page instead of models that has already been provided</h1></div>
                    <div className='left flex space-x-3'>
                        <div>
                            <span></span>
                        </div>
                        <button className='bg-sky-400 rounded-sm text-xs text-white px-4 py-2'>Contribute</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Listing