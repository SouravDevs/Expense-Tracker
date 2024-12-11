import React from 'react'

const Expense_Data = () => {
    const Expense_Data = JSON.parse(localStorage.getItem('userData'))
  return (
    <>
    <h2 className='text-2xl font-semibold mt-10'>Expense Data</h2>
    <div className=" mt-7 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Category</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
          </tr>
        </thead>
        <tbody>
          {Expense_Data[0].incomes.map((row) => (
            <tr key={row.email} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-700">{row.email}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{row.title}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{row.cat}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Expense_Data