import React, { useState } from 'react'
import Header from '../Header'
import Save_Modal from '../../Save Modal/Save_Modal'

const Menu = () => {
  const img_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74Hj8swURNBBKwqS6Nj7dypcf-a3q4amYag&s'

  const [showSaveModal, setShowSaveModal] = useState(false)
  const openSaveModal = () => {
    setShowSaveModal(true)
  }
  const closeSaveModal = () => {
    setShowSaveModal(false)
  }



 
  return (
   <>
    <div className="w-full max-w-lg h-screen flex flex-col justify-center items-center px-5">
        <Header />
        <h2 className='text-2xl font-medium italic absolute top-[150px]'>Mr. Jacob Binnie</h2>
        <div className='w-full flex flex-col items-center gap-2'>
        <button className='text-xl bg-blue-500 w-full text-white py-2 rounded-md hover:opacity-90 active:opacity-100'>Expense Table</button>
        <button className='text-xl bg-green-500 w-full text-white py-2 rounded-md hover:opacity-90 active:opacity-100'>Income Table</button>
        <button onClick={openSaveModal} className='mt-5 hover:scale-110 transition-all active:scale-100'><img className='h-14' src={img_URL} alt="" /></button>
        </div>
    </div>
    <Save_Modal showSaveModal={showSaveModal} closeSaveModal={closeSaveModal}  />
   </>
  )
}

export default Menu