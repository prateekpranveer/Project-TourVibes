import React from 'react'


const CategoryText = [
    {
        desc: "Explore the Beauty of Hills"
    },
    {
        desc: "Embark on the Alpine Adventure the Beauty of Hills"
    },
    {
        desc: "Traverse Verdent Hillsides"
    },
    {
        desc: "Embark on a journey of discovery"
    },
    {
        desc: "Venture into a woodland wonderland"
    },
    {
        desc: "Marvel at towering landmarks"
    },

]

const SearchByCategory = () => {
  return (
    <div>
        <div className='flex flex-wrap gap-2'>
            {
                CategoryText.map((p,id) => (
        
                    <div key={id} className='bg-gray-200 max-w-fit font-jost-300 py-1 px-4 rounded-full border border-gray-300'>
                        <h1 className='text-sm'>{p.desc}</h1>
                    </div>
                
                ))
            }
        </div>
    </div>
  )
}

export default SearchByCategory