import React from 'react'

const SpinnerButton = () => {
  return (
    <div>
              <div className="flex items-center justify-center">
  <button type="button" className="flex items-center rounded-sm bg-slate-700 px-4 py-2 text-white" disabled>
    <svg className="mr-3 h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span className="font-medium font-jost-400"> Processing... </span>
  </button>
</div>
    </div>
  )
}

export default SpinnerButton