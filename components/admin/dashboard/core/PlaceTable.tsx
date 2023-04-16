import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import axios from '../../../../axios'
import DangerousHTML from '../../../dangerousHTML'


const PlaceTable = () => {

    const [place, setPlace] = React.useState<any>()
    const router = useRouter()
    const handleClick = async (id: string) => {
      const placeById = await axios.get(`/place/${id}`)
      router.push(`/admin/dashboard/improve-entry/${placeById.data._id}`)
    }

    const allPlaces = async() => {
        await axios.get('/place/all').then(res => setPlace(res.data))
    }

    useEffect(() =>{
        allPlaces()
    }, [])

    return (
        <div className='flex flex-wrap gap-4'>
           <div className='font-jost-400'>
            {
                place?.map(({p}:any) => (
                    <div>
                    <p onClick={() =>handleClick(p._id)}>{p.name}</p>
                    <p>{p.adress}</p>
                    <DangerousHTML htmlContent={p.desc}/>
                    </div>
                ))
            }

           </div>
        </div>
    )
}

export default PlaceTable