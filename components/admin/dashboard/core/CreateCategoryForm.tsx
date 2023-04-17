import React from 'react'
import Spinner from '../../../enhancement/Spinner'
import axios from '../../../../axios'
import { useRouter } from 'next/router'

const CreateCategoryForm = () => {

  const router = useRouter();

  const [isSubmitting, setisSubmitting] = React.useState(false)
  const [newCategory, setNewCategory] = React.useState({
    title: '',
    desc: '',
    slug: '',
  })

  const handleSubmit = async() => {
    setisSubmitting(true)
    console.log(newCategory)
    await axios.post(`/category/create`, newCategory)
    router.push('/admin/dashboard')
    setisSubmitting(false)
  }
  return (
    <div>
      <div className='font-jost-300 text-2xl'><h1>Create Category</h1></div>
      <div>
      <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })} className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter Category Name' /></div>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input onChange={(e) => setNewCategory({ ...newCategory, desc: e.target.value })} className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter Category Description' /></div>
        <div className='w-full border text-xs border-gray-300 h-4 mt-3 rounded-sm flex items-center py-4 px-3'><input onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })} className='w-full focus:outline-none bg-trasparent' type="text" placeholder='Enter Slug' /></div>
        </div>
        <button onClick={handleSubmit} className='bg-blue-400 flex justify-center items-center hover:bg-blue-500 font-jost-300 text-md mt-4 py-2 px-4 text-white rounded-sm'>{isSubmitting ? <div className='flex items-center gap-4'><Spinner/><h1 className=''>Loading</h1></div> : <>Submit</>}</button>
    </div>
  )
}

export default CreateCategoryForm