import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { top10 } from '../../data'
import { useState } from 'react'

const Carousel = () => {

  const [curr, setCurr] = useState(0)

  const prev = () => setCurr(curr => curr === 0 ? top10.length - 1 : curr - 1)
  const next = () => setCurr(curr => curr === top10.length ? 0 : curr + 1)

  return (
    <>
      <div className='one'>
        <div className='overflow-hidden relative'>
          <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
            {
              top10.map((p) => (
                <>
                  <img src={p.pictorial} alt="" />
                </>
              ))
            }
          </div>
          <div className='absolute inset-0 flex items-center justify-between p-6'>
            <button onClick={prev} className='p1 h-16 rounded-sm shadow bg-white/30 text-gray-800 hover:bg-white'><ChevronLeft size={40} /></button>
            <button onClick={next} className='p1 h-16 rounded-sm shadow bg-white/30 text-gray-800 hover:bg-white'><ChevronRight size={40} /></button>
          </div>
        </div>
        <h1 className='font-jost-300 text-3xl mt-4 text-slate-600'>Queen of Hills</h1>
        <p className='font-jost-400 mt-2 text-slate-800'>Darjelling, West Bengal</p>
      </div>
    </>
  )
}

export default Carousel