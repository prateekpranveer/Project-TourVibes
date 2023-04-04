import React from 'react'
import { Edit } from 'react-feather'
import { top10 } from '../../../../data'
import Link from 'next/link'
import {useRouter} from 'next/router'


const PlaceTable = () => {

    const router = useRouter()
    const handleClick = (name: string) => {
      console.log(name)
      router.push(`/admin/dashboard/improve-entry/${name}`)
    }

    return (
        <div className='flex flex-wrap gap-4'>
            {
                top10.map((p) => (
                    <div className='font-jost-400 shadow-xl rounded-sm text-gray-700 flex items-center space-x-4 border max-w-fit p-4'>
                        <div className='flex flex-col'>
                            <span>{p.title}</span>
                            <span className='text-xs text-gray-500'>{p.adress}</span>
                        </div>
                        <button onClick={() => {
                            handleClick(p.title)
                        }} className=''><button className='bg-red-400 p-2 rounded-md text-white'><Edit/></button></button>
                    </div>
                ))
            }

        </div>
    )
}

export default PlaceTable