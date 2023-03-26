import React from 'react'
import SingleTour from './modals/SingleTour'

const ActiveTours = () => {
  return (
    <div className='text-2xl font-jost-300'>
        <div>
            <div className='place'>
                <h1 className='font-jost-300 text-3xl'>Gurudongmar Lake <span className='adress font-jost-300 text-xl'>Sikkim, India</span></h1>
            </div>
            <div className='mt-12'>
                <div className='flex gap-12 flex-wrap'>
                    <SingleTour/>
                    <SingleTour/>
                    <SingleTour/>
                    <SingleTour/>
                    <SingleTour/>
                    <SingleTour/>
                    <SingleTour/>
                    <SingleTour/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActiveTours