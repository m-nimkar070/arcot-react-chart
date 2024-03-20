import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-3xl shadow-md rounded-lg overflow-hidden text-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-blue"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </div>
  )
}

export default Spinner
