import React from 'react'
import { useLocation } from 'react-router-dom'

const Expense_Data = () => {

  // Access navigate data
  const location = useLocation()
  const data = location.state
  return (
    <>
    <h2 className='text-2xl font-semibold mt-10'>Expense Data</h2>
    <div className=" mt-7 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Category</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Data</th>
          </tr>
        </thead>
        <tbody>
          {data.expenses.map((row) => (
            <tr key={row.email} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-700">{row.title}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{row.category}</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹{row.amount}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{row.currentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Expense_Data