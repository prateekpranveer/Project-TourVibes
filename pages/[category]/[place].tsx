import axios from '../../axios';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import MaxPlace from '../../components/MaxPlace';
import Spinner from '../../components/enhancement/Spinner';
import Header from '../../components/Header';

const Places = () => {

  const [singlePlaceData, setSinglePlaceData] = React.useState(null)

  const router = useRouter();
  const { query } = router;
  console.log(query.place)

  const getSinglePlace = async () => {
    const placeData = await axios(`/place/${query.category}/${query.place}`)
    setSinglePlaceData(placeData.data);
  }

  useEffect(() => {
    getSinglePlace()
  }, [])

  return (
    <div className='max-w-9xl m-auto p-4'>
      <Header />
      <div className='mt-10'>
        {singlePlaceData ? <MaxPlace singlePlaceData={singlePlaceData} /> : <div className='p-12'><Spinner /></div>}
      </div>
    </div>
  )
}

export default Places