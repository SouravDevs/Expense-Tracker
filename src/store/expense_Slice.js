import { createSlice } from "@reduxjs/toolkit";

// Find Existing Customer
const findExistingUser = (state, action) => state.findIndex((userData) => userData.email === action.payload.email)
// find a Single Expense Data using email & particular ID
const expenseSlice = createSlice({
    name: 'expense',
    initialState: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [],
    reducers: {
        createUser(state, action) {
            const findUser = findExistingUser(state, action)
            if(findUser !== -1) {
                return state
            }
            else {
                state.push({...action.payload})
                localStorage.setItem('userData', JSON.stringify(state))
                return state
            }
        },
        addExpense(state, action) {
            const findUser = findExistingUser(state, action)
            state[findUser].expenses.push({...action.payload})
                localStorage.setItem('userData', JSON.stringify(state))
                return state
            },
        editExpenses(state, action) {
            const findUser = findExistingUser(state, action)
            state[findUser].email = action.payload.newEmail
            return state
        },
        addIncome(state, action) {
            const findUser = findExistingUser(state, action)
            state[findUser].incomes.push({...action.payload})
                localStorage.setItem('userData', JSON.stringify(state))
                return state
        }
        }
    }
    
)

export const getUserData = (state) => state.userData
export const {createUser, addExpense, editExpenses, addIncome} = expenseSlice.actions
export default expenseSlice.reducer