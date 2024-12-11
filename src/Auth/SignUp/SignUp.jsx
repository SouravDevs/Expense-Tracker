import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/expense_Slice';
import SuccessModal from '../../components/Modals/SuccessModal';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // Create variables
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [targetedExpenseAmount, setTargetedExpenseAmount] = useState('')
  const [targetedIncomeAmount, setTargetedIncomeAmount] = useState('')
  const [expenses, setExpenses] = useState([])
  const [incomes, setIncomes] = useState([])

  // Create variable to navigate to next step for from submission
  const [step, setStep] = useState(1)

  // Get User data from localStorage
  const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : []

  // Open & Close SuccssModal
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')

  // Handle to navigate next step
  const handleNextStep = () => {
     // Check existing user
  const findUser = userData.find((data) => data.email === email)
  if(!email && !password) {
    setIsOpen(true)
    setTitle('Enter email & password')
    clearField()
  }
 else if(findUser) {
    setIsOpen(true)
    setTitle('Email is already registered')
    clearField()
  }
  else {
    setStep(step + 1) 
  }
  }

  // Handle to navigate previous step
  const handlePreStep = () => {
    setStep(step - 1)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  const clearField = () => {
    setEmail('')
    setPassword('')
  }

  // use of dispatch
  const dispatch = useDispatch()
  // use of Navigation
  const nav = useNavigate()

  // handleSignUp
  const handleSignUp = () => {
  dispatch(createUser({email, password, name, targetedExpenseAmount, targetedIncomeAmount, expenses, incomes}))
      setIsOpen(true)
      setTitle('Account Created Successfully')
      clearField()
      
      setTimeout(() => {
        nav('/login', {state: {email, password}})
      }, 1000);
    
  }
  return (
   <>
    <div className='w-full max-w-lg px-8'>
        <h1 className='text-2xl'>Create an account by your email</h1>
        {/* Form */}
        {/* Step 1 */}
       {
        step === 1 && (
          <div className='w-full mt-7 flex flex-col gap-5'>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='123@example.com' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='password' />
            <button onClick={handleNextStep} className='text-xl bg-gray-900 text-white py-1 rounded-md hover:opacity-90 active:opacity-100'>Next</button>
      </div>
        )
       }

       {/* Step 2 */}

       {
        step === 2 && (
          <div className='w-full mt-7 flex flex-col gap-5'>
          <input value={name} onChange={(e) => setName(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='Name' />
          <input value={targetedExpenseAmount} onChange={(e) => setTargetedExpenseAmount(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='Set Monthly Expense Amount' />
          <input value={targetedIncomeAmount} onChange={(e) => setTargetedIncomeAmount(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='Set Monthly Income Amount' />
            <div className='flex justify-between'>
            <button onClick={handlePreStep} className='text-xl px-3 bg-gray-900 text-white py-1 rounded-md hover:opacity-90 active:opacity-100'>Back</button>
            <button onClick={handleSignUp} className='text-xl px-3 bg-gray-900 text-white py-1 rounded-md hover:opacity-90 active:opacity-100'>Register</button>
            </div>
      </div>
        )
       }
    </div>
    <SuccessModal isOpen={isOpen} title={title} handleClose={handleClose} />
   </>
  )
}

export default SignUp