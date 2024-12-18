import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import SuccessModal from '../../components/Modals/SuccessModal'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const LogIn = () => {
   // Create variables
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   // Use of navigate
   const nav = useNavigate()

  //  // Access navigate data
  //  const location = useLocation()
  //  const {email: Email, password: Password} = location.state

  //  useEffect(() => {
  //   setEmail(Email)
  //   setPassword(Password)
  //  },[])

   // get Store data using localStorage
   const userData = JSON.parse(localStorage.getItem('userData'))

     // Open & Close SuccssModal
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')

  const handleClose = () => {
    setIsOpen(false)
  }

  const clearField = () => {
    setEmail('')
    setPassword('')
  }

   // handle LogIn
   const handleLogIn = () => {
    const findUser = userData.find((data) => data.email === email && data.password === password) 
    if(findUser) {
      clearField()
      nav('/menu', {state: findUser})
    }
    else {
      setIsOpen(true)
      setTitle('User not found')
      clearField()
    }
   }
  return (
 <>
    <div className='w-full max-w-lg px-8'>
    <h1 className='text-2xl'>Login into your account by your username</h1>
    {/* Form */}
    <div className='w-full mt-7 flex flex-col gap-5'>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='username' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full max-w-lg py-1 pl-3 font-medium text-gray-900 rounded-md bg-gray-300 placeholder:text-gray-800 placeholder:italic' type="text" placeholder='password' />
        <button onClick={handleLogIn} className='text-xl bg-gray-900 text-white py-1 rounded-md hover:opacity-90 active:opacity-100'>Log In</button>
        <p className='text-[18px] text-center'>Create an account? <Link className='font-semibold' to='/signup' >SignUp</Link> </p>
    </div>
</div>
<SuccessModal isOpen={isOpen} title={title} handleClose={handleClose} />

 </>
  )
}

export default LogIn