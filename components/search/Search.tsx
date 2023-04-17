import React, { useEffect } from 'react'
import { Search } from 'react-feather'
import axios from '../../axios';
import { useRouter } from 'next/router';

interface PlacesProps {
    name: string,
    adress: string,
    category: string,
    checkPoints: [],
    slug: string,
    _id: string,
    __v: number
}

const SearchBox = () => {

    const [searchText, setSearchText] = React.useState('');
    const [places, setPlaces] = React.useState<Array<PlacesProps>>([]);

    const router = useRouter();

    const getPlacesNames = async () => {
        const allPlaces = await axios.get(`place/search?searchTerm=${searchText}`);
        setPlaces(allPlaces.data)
    }

    useEffect(() => {
        if (searchText) {
            getPlacesNames();
        } else {
            setPlaces([])
        }
    }, [searchText])

    const handleResultClick = (p: PlacesProps) => {
        router.push(`/${p.category}/${p.slug}`)
    }

    return (
        <div className='relative'>
            <div className='flex relative justify-between items-center bg-transparent font-jost-300 p-4 border rounded-full'>
                <input onChange={(e) => setSearchText(e.target.value)} className='w-full focus:outline-none' type='text' placeholder='Where do You want to go?' />
                <div className='mr-2'><Search size={20} color='gray' /></div>
            </div>

            <div className={`results absolute rounded-20 w-full ${!searchText && 'hidden'} bg-white p-4 border top-16 right-0`}>
                {
                    places?.map((p, id) => (
                        <div onClick={() => handleResultClick(p)} key={id} className={`flex justify-between rounded-sm p-2 text-gray-700 border-b-1`}>
                            <div className='font-jost-400 text-sm'>{p.name}</div>
                            <div>
                                <h1 className='font-jost-300 text-sm'>Active Tours: 20</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchBox