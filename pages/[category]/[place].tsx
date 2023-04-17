import axios from '../../axios';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import MaxPlace from '../../components/MaxPlace';

const Places = () => {

    const [singlePlaceData, setSinglePlaceData] = React.useState({})

    const router = useRouter();
    const {query} = router;
    console.log(query.place)

    const getSinglePlace = async() => {
        const placeData = await axios(`/place/${query.place}`)
        setSinglePlaceData(placeData.data);
    }
    
    useEffect(() => {
        getSinglePlace()
    }, [])

  return (
    <>
    <div className='max-w-9xl m-auto mt-10 p-4'>
    <MaxPlace singlePlaceData = {singlePlaceData}/>
    </div>
    </>
  )
}

export default Places