import React from 'react'

const Header = () => {
  return (
    <div className='absolute top-0 w-full h-16 shadow-md flex justify-between items-center px-5'>
        <h2 className='text-2xl font-medium'>Expense & Income Tracker</h2>
        {/* <button className='text-sm px-3 bg-gray-900 text-white py-1 rounded-md hover:opacity-90 active:opacity-100'>LogOut</button> */}
    </div>
  )
}

export default Header