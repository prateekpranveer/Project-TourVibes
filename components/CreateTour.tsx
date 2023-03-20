import React, { useState } from 'react';
import { Plus } from 'react-feather';
import Link from 'next/link';

function CreateTour() {

  return (
    <Link href='/create-tour'>
    <div className='flex'>
      <button className="bg-gray-200 flex space-x-2 items-center hover:bg-gray-300 hover:text-gray-600 text-gray-400 font-jost-400 py-2 px-4 rounded-sm">
        <span>Create Tour</span> <Plus size={16}/>
      </button>
    </div>
    </Link>
  );
}

export default CreateTour