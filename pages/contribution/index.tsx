import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useRouter } from 'next/router'

const Contribution = () => {
    const router = useRouter();
    const authenticated =  useSelector((state: RootState) => state.token)
    const handleContributionForward = () => {
        if (authenticated) router.push('/contribution/listing')
        else {
            router.push('/login')
        }
    }
    return (
        <div className='max-w-9xl m-auto mt-10 p-4'>
            <div className=''>
                <div className='font-rale-800 text-gray-600 text-2xl tracking-wider max-w-fit'><h1>Welcome to TourVibes</h1></div>
                <div className='font-jost-400 mt-6 tracking-normal text-xl max-w-6xl'>
                    <h1 className='font-jost-300'>How can You Contribute?</h1>
                    <p className='text-sm mt-4 text-gray-600'>
                        As you know, we are currently working on a web development project using Next.js, Redux.js, Tailwind CSS, Node.js, Express.js, and Mongoose. I am excited to announce that I would like to invite you to contribute to the project and gain real-world experience in web development.

                        There are many ways that you can contribute to the project, including: <br></br><br></br>

                        <span className='font-bold'>Code contribution:</span> You can contribute to the project's codebase by writing new features or improving existing code using Next.js, Redux.js, and other technologies used in the project. You can also contribute by fixing bugs and improving the overall code quality. <br></br>
                        <span className='font-bold'>Styling:</span> If you have design skills, you can contribute to the project by improving the UI/UX with Tailwind CSS. You can work on styling components, improving the overall visual design, and ensuring that the website is responsive on different devices. <br></br>
                        <span className='font-bold'>Testing:</span> You can contribute to the project by testing the code and reporting bugs. You can also write automated tests to ensure that new features and bug fixes do not break existing functionality. <br></br>
                        <span className='font-bold'>Documentation:</span> You can contribute to the project's documentation by updating the project's README file, writing inline comments, and creating tutorials or guides for other developers who will be working on the project in the future. <br></br>
                        <span className='font-bold'>Database:</span> If you have knowledge of databases and data modeling, you can contribute by working on the database schema, creating new collections, and optimizing database queries. <br></br>
                        <span className='font-bold'>Deployment:</span> You can help with deploying the project to a server or hosting platform, configuring the server and ensuring that the project runs smoothly in a production environment. <br></br>
                    </p>
                </div>

                <div className='font-jost-400 mt-10 tracking-normal text-xl max-w-6xl'>
                    <h1 className='font-jost-300'>Who can Contribute?</h1>
                    <p className='text-sm mt-4 text-gray-600'>
                        
                    This web development project is open exclusively to students of <span className='font-bold'>Techno Engineering College Banipur.</span> If you are a student of the college and have knowledge and skills in Next.js, Redux.js, Tailwind CSS, Node.js, Express.js, and Mongoose, we invite you to contribute to the project.
We believe that this project will provide you with valuable experience and skills that will be useful in your future careers. You can contribute by working on the project's codebase, styling the user interface, testing the code, documenting the project, working on the database schema, or helping with deployment.
To get started, please contact [Your Name] with your interest in contributing. You will receive further instructions on how to join the project and contribute to its development.
Thank you for your interest and we look forward to working with you on this exciting project!<br></br><br></br>
                    </p>
                </div>

                <div className='mt-4'>
                    <button onClick={() => handleContributionForward()} className='text-sm font-jost-400 bg-gray-200 hover:bg-gray-800 hover:text-white px-4 py-4 rounded-sm shadow-sm border'>Make Contribution</button>
                </div>
            </div>
        </div>
    )
}

export default Contribution