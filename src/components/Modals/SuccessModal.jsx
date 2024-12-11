import React from 'react'

const SuccessModal = ({isOpen, title, handleClose}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-5 ${isOpen ? 'visible' : 'hidden'}`}>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2'>
        <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Message</h2>
            <button onClick={handleClose} className='text-xl active:bg-gray-200'>X</button>
        </div>
        <div className='w-full flex flex-col items-center gap-5 mt-3'>
            <h2 className='text-xl'>{title}</h2>
            <button onClick={handleClose} className='w-3/5 py-1 text-white font-medium rounded-md bg-red-500 active:opacity-75'>Close</button>
        </div>
        </div>
    </div>
  )
}

export default SuccessModal