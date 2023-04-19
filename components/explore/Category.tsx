import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from '../../axios'
import Spinner from '../enhancement/Spinner'
import { ChevronRight, Plus } from 'react-feather'

interface PlaceProps {
    name: string,
    id: string,
    adress: string
    slug:string
}

const Category = () => {

    const [isLoading, setisLoading] = useState(false)

    const [places, setPlaces] = useState<Array<PlaceProps>>([])
    const [category, setCategory] = useState({
        title: '',
        slug: '',
        desc: '',
        active: false,
    })

    const router = useRouter()
    const findAllPlaceByCategory = async () => {
        const query = router.query;
        console.log(query)
        setisLoading(true)
        const queryData = await axios.get(`/category/${query.category}`)
        console.log(queryData.data);
        setCategory({ ...category, title: queryData.data?.name, slug:queryData.data?.slug, active: true })
        const allPlaces = await axios.get(`/place/${queryData.data?._id}`)
        console.log(allPlaces.data)
        setPlaces(allPlaces.data)
        setisLoading(false)
    }

    useEffect(() => {
        findAllPlaceByCategory()
    }, [router.query])


    if (isLoading ) {
        return (<div className='flex justify-center mt-20'><Spinner/></div>)
    }
        return (
            <div>
            <h1 className='mt-10 ml-2 font-rale-800 text-md'>{category.title}</h1>
            <div className='mt-8 flex flex-wrap gap-8'>
                {
                    places?.map((p, id) => (
                            <div key={id} className='max-w-fit relative bg-gray-200 rounded-full shadow-xl text-black'>
                                <div onClick={() => {
                                    router.push(`/${category.slug}/${p.slug}?activeTours`)
                                }}
                                 className='absolute flex justify-center bg-black py-2 hover:bg-gray-700 rounded-full -top-2 shadow-lg cursor-pointer text-white font-jost-300 text-xs px-4'>
                                    <span className='tracking-widest'>Explore Tours</span>
                                </div>
                                <div onClick={() => {
                                    router.push(`/${category.slug}/${p.slug}`)
                            }} className='absolute bg-green-600 hover:bg-green-700 text-white p-3 rounded-full cursor-pointer -bottom-2 -right-2'><ChevronRight/></div>
                                <div className='py-8 cursor-pointer px-12 font-jost-300'>
                                    <h1 className='font-jost-300 text-3xl'>{p.name}</h1>
                                    <p>{p.adress}</p>
                                </div>
                            </div>
                    ))
                }
            </div>
            </div>
        )
}

export default Category