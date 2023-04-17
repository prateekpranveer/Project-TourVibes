import React from 'react'
import Spinner from '../../../enhancement/Spinner'
import { Plus } from 'react-feather'
import Link from 'next/link'


const PlaceTable = ({tableName, route, data, handleClick}:any) => {
    if (!data) return (<Spinner/>)
    else {

        return (
            <div>
            <div className=''><h1 className='font-rale-400 text-sm'>{tableName}</h1></div>
            <div className='flex items-center space-x-2 mt-2'>
                <div className='flex space-x-4 items-center'>
                    <Link href={route}><button className='bg-gray-100 flex space-x-2 font-jost-300 border border-gray-300 hover:bg-gray-200 text-sm px-4 py-2 shadow-sm rounded-md'><Plus size={15}/></button></Link>
                </div>
               <div className='font-jost-400 flex flex-wrap gap-2'>
                {
                    data?.map((p: { _id: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined },id: React.Key | null | undefined) => (
                        <div key={id} className='bg-white-800 text-gray-600 px-5 py-2 shadow-sm border rounded-md text-xs'>
                        <p onClick={() =>handleClick(p._id)}>{p.name}</p>
                        </div>
                    ))
                }
    
               </div>
            </div>
            </div>
        )

    }

}

export default PlaceTable