import React, { useState } from 'react'
import Expense_Modal from '../Expense Modal/Expense_Modal'
import Income_Modal from '../Income Modal/Income_Modal'


const Save_Modal = ({showSaveModal, closeSaveModal}) => {
    const [showExpenseModal, setShowExpenseModal] = useState(false)
    const [showIncomeModal, setShowIncomeModal] = useState(false)
     // Open and Close Expense Modal
  const openExpenseModal = () => {
    setShowExpenseModal(true)
  }
  const closeExpenseModal = () => {
    setShowExpenseModal(false)
  }

    // Open and Close Income Modal
    const openIncomeModal = () => {
        setShowIncomeModal(true)
      }
      const closeIncomeModal = () => {
        setShowIncomeModal(false)
      }
  return (
   <>
    <div className={`fixed inset-0 z-50 flex items-center justify-center px-5 bg-black bg-opacity-50 ${showSaveModal ? 'visible': 'hidden'}`}>
    <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
      <button onClick={closeSaveModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✖</button>
      <div className='w-full flex flex-col items-center gap-3 mt-5'>
      <button onClick={openExpenseModal} className='text-xl bg-blue-500 w-full max-w-[300px] text-white py-2 rounded-md hover:opacity-90 active:opacity-100'>Expense</button>
      <button onClick={openIncomeModal} className='text-xl bg-green-500 w-full max-w-[300px] text-white py-2 rounded-md hover:opacity-90 active:opacity-100'>Income</button>
      </div>
      <div></div>
    </div>
  </div>
    <Expense_Modal showExpenseModal={showExpenseModal} closeExpenseModal={closeExpenseModal} />
    <Income_Modal showIncomeModal={showIncomeModal} closeIncomeModal={closeIncomeModal} />
   </>

  )
}

export default Save_Modal