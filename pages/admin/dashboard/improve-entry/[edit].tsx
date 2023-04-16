import React, { useEffect } from 'react'
import UserHeader from '../../../../components/admin/dashboard/core/UserHeader'
import CreatePlaceForm from '../../../../components/admin/dashboard/core/CreatePlaceForm'
import axios from '../../../../axios'
import { useRouter } from 'next/router'

const Improve = () => {
  const router = useRouter();
  const {query} = router;
  const [placeDetailState, setPlaceDetailState] = React.useState<any>()

  const getPlaceDetails = async() => {
    console.log(query);
    const placeDetail = await axios.get(`/place/${query.edit}`)
    setPlaceDetailState(placeDetail)
  }

  useEffect(() => {
    getPlaceDetails()
  }, [])

  return (
    <div className='max-w-9xl m-auto p-4'>
      <div className=''>
        <UserHeader />
        <CreatePlaceForm placeDetailsforImprovement = {placeDetailState} />
      </div>
    </div>
  )
}

export default Improve