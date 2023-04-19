import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from '../../axios';
import Spinner from '../enhancement/Spinner';

const SearchByCategory = () => {
    const [categoryIsLoading, setcategoryIsLoading] = React.useState(false)
    const [allCategory, setallCategory] = React.useState<any>([])

    const CategoryText = async () => {
        setcategoryIsLoading(true)
        const allCategory = await axios.get('/category/all')
        setallCategory(allCategory.data)
        setcategoryIsLoading(false)
    }

    useEffect(() => {
        CategoryText()
    }, [])

    const router = useRouter();
    const fetchPlaceByCategory = async (p: string) => {
        router.push(`/${p}`)
    }

    if (categoryIsLoading) return (<div className='flex justify-center mt-8'><Spinner size={'lg'}/></div>)
    else 
    return (
        <div>
            <div className='flex flex-wrap gap-2'>
                {
                    allCategory?.map((p: { slug: string; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, id: React.Key | null | undefined) => (

                        <div onClick={() => fetchPlaceByCategory(p.slug)} key={id} className='bg-gray-100 cursor-pointer hover:bg-gray-300 max-w-fit font-jost-300 py-1 px-4 rounded-full border border-gray-300'>
                            <h1 className='text-sm'>{p.name}</h1>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default SearchByCategory