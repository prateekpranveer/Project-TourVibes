import React from 'react'
import Header from '../../components/Header'
import Link from 'next/link'

const steps = [
    "Pick up the problem from Contribution page",
    "Visit the Github link of the project.",
    "Fork the repository by clicking the 'Fork' button located in the top-right corner of the project page. This will create a copy of the repository in your own Github account.",
    "Clone the forked repository onto your local machine using the Git command-line tool or your preferred Git GUI tool.",
    "Make the desired changes to the code. Be sure to follow any coding standards or guidelines specified by the project.",
    "Commit the changes to your local repository with a descriptive commit message.",
    "Push the changes to your forked repository on Github.",
    "Create a pull request by clicking the 'New Pull Request' button in the original project page.",
    "Once the pull request is created, mark it as done in the contribution page.",
    "If the project maintainer finds your contribution helpful, your name will be displayed on the contributors section in the contribution page."
]

const Steps = () => {
  return (
    <div className='m-auto max-w-9xl p-4'>
        <Header/>
        <hr />
        <div><h1 className='font-rale-400 text-md mt-8'>Here are the steps to contribute to a Project TourTribes:</h1></div>
        <div>
            <div>
                <ul className='mt-4 font-jost-400 text-sm leading-8'>
                    {
                        steps?.map((p) => (
                            <li className='list-decimal ml-4'>{p}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='mt-4 font-jost-400 text-sm'>By following these steps, you can successfully contribute to a <span className='text-xl'>TourTribes</span></div>
            <div className='max-w-fit border-b-1 border-blue-500 mt-4 font-jost-400'><Link href='https://github.com/prateekpranveer/Project-TourVibes'>Gihub Link</Link></div>
        </div>
    </div>
  )
}

export default Steps
