import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { top10 } from '../data'
import { useState } from 'react'
import Carousel from './core/Carousel'

const TopVibe = () => {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr(curr => curr === 0 ? top10.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr === top10.length ? 0 : curr + 1)

    return (
        <div className='mt-16'>
            <div className='flex lg:flex-row md:flex-col'>
                <div className='lg:w-2/3 ml-auto mr-auto py-4'>
                    <h1 className='font-jost-400 text-gray-700 border-solid max-w-fit border-slate-400 border-b-1'>Top 10 Tourist Places in India</h1>
                    <div className=''>
                        <div className='main mt-8'>
                            <Carousel/>












                            <div className='other grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full mt-10'>
                                {
                                    top10.map((p) => (
                                        <div className='ml-auto mr-auto mt-10'>
                                        <div className=' min-w-fit'><img src={p.pictorial} alt="" /></div>
                                        <h1 className='font-jost-400 font-bold text-sm text-slate-800 mt-2'>{p.title}</h1>
                                        <p className='font-jost-400 text-gray-700 text-xs'>{p.adress}</p>
                                        </div>
                                    ))
                                }
                            </div>













                        </div>
                    </div>


                </div>
                <div className='w-1/3 bg-blue-100'></div>
            </div>
        </div>
    )
}

export default TopVibe