import React from 'react'
import JoinTour from './JoinTour'

const Details = () => {
  return (
    <div>
        <div className='flex flex-wrap'>
            <div className='h-80 w-3/5 mt-8'>
                <div className='flex space-x-10 items-center'>
                    <div className='top'>
                        <h1 className='font-jost-300 border-b-1 text-3xl py-1 border-gray-500 max-w-fit'>Gurudongmar Lake</h1>
                        <p className='font-jost-400 text-gray-800 mt-4'><span className='text-gray-800 font-jost-400 bold'>Sikkim</span>, India</p>
                    </div>
                    <div className='button flex space-x-6 font-jost-300 min-w-fit'>
                        <button className='bg-black text-white text-sm px-4 rounded-sm'>Explore Gallary</button>
                        <JoinTour/>
                    </div>
                </div>
                <div className='main w-11/12 mt-10'>
                        <div>
                            <p className='font-jost-400 text-sm text-gray-700'>Gurudongmar Lake is a stunningly beautiful high-altitude lake located in the Indian state of Sikkim. Situated at an altitude of 17,100 feet, Gurudongmar Lake is considered to be one of the highest lakes in the world. It is a popular tourist attraction in Sikkim due to its crystal-clear blue waters, majestic snow-capped mountains, and serene atmosphere.
The lake is named after Guru Padmasambhava, who is believed to have visited the area during his journey to Tibet. The legend says that the lake was formed when Guru Padmasambhava touched a part of the lake with his walking stick and the ice melted, leaving behind a clear blue lake. The lake is also considered sacred by the local population and is an important pilgrimage site for Buddhists and Hindus.

<p className='mt-2'>The beauty of Gurudongmar Lake is unparalleled, with its crystal-clear blue waters reflecting the surrounding mountains and the clear blue skies above. The lake is surrounded by snow-capped mountains and is often shrouded in mist, creating a mystical and serene atmosphere. The lake is frozen for most of the year, except for a small portion that remains clear even in the coldest months of winter.

Gurudongmar Lake is located in a remote part of Sikkim and is accessible only by road.</p> <p className='mt-2'>The journey to the lake is a challenging one, with steep and winding roads that require skilled drivers. However, the drive is worth it, as the scenery along the way is breathtakingly beautiful. Visitors are required to obtain permits to visit the lake, which can be obtained from the local authorities.

Apart from its natural beauty, Gurudongmar Lake is also famous for its medicinal properties. </p>The lake is believed to have healing properties and is considered to be sacred by the local population. Many people come to the lake to take a dip in its waters and seek healing for various ailments.

In conclusion, Gurudongmar Lake is a magnificent natural wonder that is a must-visit for anyone traveling to Sikkim. Its crystal-clear blue waters, snow-capped mountains, and serene atmosphere create a truly magical experience. Visiting the lake is a challenging journey, but it is one that is well worth it for the stunning beauty and spiritual experience that awaits visitors.</p>
                        </div>
                    </div>
            </div>
            <div className='bg-blue-100 h-80 w-2/5 mt-8'></div>
        </div>
    </div>
  )
}

export default Details