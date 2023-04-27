import { useRouter } from 'next/router'
import React from 'react'

const DeveloperPortfolio = () => {
    const router = useRouter();
    const fileName = 'prateek_resume.pdf'
    const fileUrl = `${router.asPath}/${fileName}`
  
    function handleDownload() {
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = fileName
      link.click()

    }

  return (
    <div>
        <div className='h-12 w-full max-w-9xl m-auto p-4'>
            <div className='font-rale-400 text-3xl mt-10 mb-10'><h1>Developer's Portfolio</h1></div>
            <div className='mt-4 flex flex-wrap space-x-6'>
                <div className='w-40 h-40 rounded-full overflow-hidden border-2 '><img src='/dev.png'></img></div>
                <div className='w-4/5'>
                <div className=''><span className='text-2xl font-jost-300'>Full Stack Developer</span></div>
                <div className='mt-4'><span className='font-jost-400 mt-10'>Next.js || React.js || Redux.js || TailwindCSS || Styled Components || Express.js </span></div>
                    <div className='mt-4 font-jost-400 text-gray-600'><p>Hey Folks, I am a full-stack developer, author at GFG, and tech enthusiast. With expertise in both front-end and back-end technologies, I specialize in creating scalable web applications that deliver exceptional user experiences. My passion for technology and commitment to excellence drive me to constantly improve and stay up-to-date with the latest industry trends.</p></div>
                    <div onClick={handleDownload} className='mt-4'><button className='px-4 py-2 border border-gray-700 hover:text-white hover:bg-black rounded-full font-jost-400'>Download Resume</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeveloperPortfolio