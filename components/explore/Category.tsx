import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from '../../axios'
import Spinner from '../enhancement/Spinner'

const Category = () => {

    const [places, setPlaces] = useState<any>(null)
    const [category, setCategory] = useState({
        title: '',
        desc: '',
        active: false,
    })

    const router = useRouter()
    const findAllPlaceByCategory = async() => {
        const query = router.query;
        console.log(query)
        const queryData = await axios.get(`/category/${query.category}`)
        console.log(queryData)
        setCategory({...category, title: queryData.data.name, active: true})
        console.log(category)
        const allPlaces = await axios.get(`/place/${queryData.data._id}`)
        console.log(allPlaces);
        setPlaces(allPlaces.data)
    }

    useEffect(() => {
        findAllPlaceByCategory()
    },[router])


    if (places) {
        return (
            <div className='p-4 bg-teal-100 mt-4'>
                {
                 places && places?.map((p: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined },id: React.Key | null | undefined) => (
                    <>
                    <div key={id} className='max-w-fit'>
                        <h1 className='font-jost-400'>{p.name}</h1>
                    </div>
                    </>
                 ))   
                }
            </div>
          )
    }
    else return <Spinner/>
}

export default Category