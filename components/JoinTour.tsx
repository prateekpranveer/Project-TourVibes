import React, { useState } from 'react';
import { UserPlus } from 'react-feather';
import Link from 'next/link';

function JoinTour() {

  return (
    <Link href='/join-tour'>
    <div className='flex'>
      <button className="bg-gray-200 text-sm flex space-x-2 items-center hover:bg-gray-300 hover:text-gray-600 text-gray-400 font-jost-400 py-4 px-6 rounded-sm">
        <span>Join Tour</span> <UserPlus size={16}/>
      </button>
    </div>
    </Link>
  );
}

export default JoinTour