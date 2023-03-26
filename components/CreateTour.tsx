import React, { useState } from 'react';
import { Plus } from 'react-feather';
import Link from 'next/link';
import { paddingType } from './Banner';

function CreateTour() {

  return (
    <Link href='/create-tour'>
    <div className='flex'>
      <button className={`bg-gray-200 shadow-md flex space-x-2 items-center border hover:bg-gray-200 hover:text-gray-600 text-gray-600 font-jost-400 py-4 px-8 rounded-sm`}>
        <span>Create Tour</span> <Plus size={16}/>
      </button>
    </div>
    </Link>
  );
}

export default CreateTour