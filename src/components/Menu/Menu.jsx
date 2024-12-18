import React, { useState } from 'react'
import Header from '../Header'
import Save_Modal from '../../Save Modal/Save_Modal'
import { useLocation, useNavigate } from 'react-router-dom'
import plus from '/src/assets/plus.png'

const Menu = () => {
  
  const [showSaveModal, setShowSaveModal] = useState(false)
  const openSaveModal = () => {
    setShowSaveModal(true)
  }
  const closeSaveModal = () => {
    setShowSaveModal(false)
  }

  // Access user data from navigate()
  const location = useLocation()
  const data = location.state
  console.log(data)

  // use of Navigate()
  const nav = useNavigate()

  return (
   <>
    <div className="w-full max-w-lg h-screen flex flex-col justify-center items-center px-5">
        <Header />
        <h2 className='text-2xl font-medium italic absolute top-[150px]'>Mr. {data.name}</h2>
        <div className='w-full flex flex-col items-center gap-2'>
        <button onClick={() => nav('/home/expense', {state: data})} className='text-xl bg-blue-500 w-full text-white py-2 rounded-md hover:opacity-90 active:opacity-100'>Expense Table</button>
        <button onClick={() => nav('/home/income', {state: data})} className='text-xl bg-green-500 w-full text-white py-2 rounded-md hover:opacity-90 active:opacity-100'>Income Table</button>
        <button onClick={openSaveModal} className='mt-5 hover:scale-110 transition-all active:scale-100'><img className='h-14' src={plus} alt="" /></button>
        </div>
    </div>
    <Save_Modal data={data} showSaveModal={showSaveModal} closeSaveModal={closeSaveModal}  />
   </>
  )
}

export default Menu