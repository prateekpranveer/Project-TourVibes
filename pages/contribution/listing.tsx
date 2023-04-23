import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import axios from '../../axios'
import { useRouter } from 'next/router'
import { RootState } from '../../store/store'
import Spinner from '../../components/enhancement/Spinner'
import Header from '../../components/Header'
import { Plus } from 'react-feather'
import AlertModal from '../../components/modals/AlertModal'
import Link from 'next/link'


interface ContributionProps {
    _id: string,
    desc: string,
    accomplished: boolean,
    picked: boolean,
    Published: boolean,
    author: string,
}

const listing = () => {

    const [isGetting, setisGetting] = useState(false)
    const [con, setcon] = useState<Array<ContributionProps>>([])
    const router = useRouter()
    const {emailIDFound} = useSelector((state:RootState) => state.token)
    console.log(emailIDFound._id)

    const findAllCon = () => {
        const allCon = axios.get('/contribution/all').then((res) => setcon(res.data))
    }

    useEffect(() => {
        findAllCon()
    }, [router.query])


    const handleButtonClick = async (p:ContributionProps) => {
        setisGetting(true)
        const articleStatus = await axios.get(`/contribution/${p._id}`)
        if (!emailIDFound._id) {
            alert('Kindly Login Before Doing any changes')
            setisGetting(false)
        }
        else {
            if (articleStatus.data.picked) {
                await axios.put(`/contribution/${emailIDFound._id}/accomplish/${p._id}`).then(res => console.log(res.data)).catch(res => alert(res.response.data))
                setisGetting(false)
            }
            else if (articleStatus.data.picked && articleStatus.data.accomplish) {
                await axios.put(`/contribution/${emailIDFound._id}/publish/${p._id}`)
                setisGetting(false)
            }
            else await axios.put(`/contribution/${emailIDFound._id}/pick/${p._id}`).then(() => setisGetting(false))
        }
    }

    const handleDeleteAll = async() => {
        await axios.delete('/contribution/deleteAll')
    }


  return (
    <div className='max-w-9xl p-4 m-auto'>
        <Header/>
        {/* <button className='bg-red-800 text-white px-4 py-2 rounded-full mb-4' onClick={handleDeleteAll}>Delete All</button>
        <div className=''><button className='flex space-x-2 items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-slate-300 text-gray-600 border-b-1'><span>Suggest an Issue</span><Plus color='gray' size={20}/></button></div> */}
        <div className='flex items-center mb-4 justify-between'>
        <h1 className='text-xl mt-4 mb-4 font-jost-300 max-w-fit'>Pick Issue</h1>
        <Link className='text-xs text-blue-800 border-b-1 tracking-wider border-blue-600' href='/contribution/steps-to-contribute'>STEPS TO CONTRIBUTE</Link>
        </div>
    <div className='max-w-9xl flex flex-col gap-4 m-auto'>
    <>
    {
        con?.map((p,id) => (
            <div className='flex justify-between'>
                <div className='flex space-x-4 text-sm'>
            <div>{p.desc}</div>
            <div className=''>{p.author?<div className='flex items-center space-x-2'><h1 className='bg-green-800 pr-2 text-white py-0 text-xxs rounded-full'><span className='px-2 py-1 rounded-full'>Picked by</span>{p.author}</h1></div>
            :
            <></>
            }</div>
            </div>
            <div>
                <button className='' onClick={() => handleButtonClick(p)}>
                    {
                        p.picked && p.accomplished ? <><h1 className='bg-red-400 px-4 text-white py-2 rounded-full text-xs'>Awaiting Admin</h1></>:
                        <>
                        {
                            p.picked?<><h1 className='bg-yellow-400 px-4 text-white py-2 rounded-full text-xs'>Mark as Done</h1></>:<><h1 className='bg-blue-400 px-4 text-white py-2 rounded-full text-xs'>Pick</h1></>
                        }
                        </>
                    }
                </button>
                </div>
            </div>
        ))
    }
    </>
    </div>
    </div>
  )
}

export default listing