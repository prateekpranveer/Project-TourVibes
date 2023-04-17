import React from 'react'
import PlaceTable from '../../../components/admin/dashboard/core/PlaceTable'
import { useRouter } from 'next/router'
import axios from '../../../axios'

const index = () => {

  const addCategoryRoute = '/admin/dashboard/create-category'
  const addPlaceRoute = '/admin/dashboard/create-entry'

  const [place, setPlace] = React.useState<any>([])
  const [category, setCategory] = React.useState<any>([])

  const router = useRouter()

  const handlePlaceClick = async (id: string) => {
    router.push(`/admin/dashboard/improve-entry/${id}`)
  }

  const allPlaces = async () => {
    const data = await axios.get('/place/all')
    setPlace(data.data)
  }

  React.useEffect(() => {
    allPlaces();
  }, [])

  const handleCategoryClick = async (id: string) => {
    router.push(`/admin/dashboard/improve-entry/${id}`)
  }

  const allCategory = async () => {
    const data = await axios.get('/category/all')
    setCategory(data.data)
  }

  React.useEffect(() => {
    allCategory();
  }, [])

  return (
    <div className='max-w-9xl m-auto p-4'>
      <div className='mt-4'><PlaceTable tableName={'Places'} route={addPlaceRoute} data={place} handleClick={handlePlaceClick} /></div>
      <div className='mt-4'><PlaceTable tableName={'Categories'} route={addCategoryRoute} data={category} handleClick={handleCategoryClick} /></div>
    </div>
  )
}

export default index