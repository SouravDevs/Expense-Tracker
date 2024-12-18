import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIncome } from '../store/expense_Slice'

const Income_Modal = ({showIncomeModal, closeIncomeModal, data}) => {
    // Create variables
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')

    const {email} = data

    // Use of dispatch
    const dispatch = useDispatch()

    const clearFields = () => {
      setTitle('')
      setAmount('')
    }

    const handleSave = () => {
        // Current date & time
        const date = new Date()

        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`

        const id = crypto.randomUUID()
        dispatch(addIncome({email, title, amount, currentDate, id}))
        clearFields()
        closeIncomeModal()
    }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center px-7 bg-black bg-opacity-50 ${showIncomeModal ? 'visible' : 'hidden'}`}>
    <div className="relative w-full max-w-lg p-6 px-5 flex flex-col items-center bg-white rounded-lg shadow-lg">
        <button onClick={closeIncomeModal} className='text-5xl absolute top-1 right-3'>&times;</button>
      <h2 className='text-2xl font-medium'>Add Expense</h2>
      <div className='w-full flex flex-col mt-3 gap-3'>
      <input value={title} onChange={e => setTitle(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='Title' />
     
      <input value={amount} onChange={e => setAmount(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='Amount' />
      </div>
      <button onClick={handleSave} className='text-xl w-full mt-5 bg-gray-900 text-white py-1 rounded-md hover:opacity-90 active:opacity-100'>Save</button>
    </div>
  </div>
  )
}

export default Income_Modal