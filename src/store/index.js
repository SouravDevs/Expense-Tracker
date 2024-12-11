import { configureStore } from '@reduxjs/toolkit'
import  expenseSlice, { addIncome, createUser } from './expense_Slice'

export const store = configureStore({
    reducer: {
        userData: expenseSlice
    }
})

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(createUser({email: '123@gmail.com', password: '1234', expenses: [], incomes: []}))
// store.dispatch(addIncome({email: '123@gmail.com', title: 'Cashback', cat: 'Cashback', amount: 2000 }))

