import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './Auth/LogIn/LogIn.jsx'
import SignUp from './Auth/SignUp/SignUp.jsx'
import Expense_Data from './components/DataList/Expense_Data.jsx'
import Income_Data from './components/DataList/Income_Data.jsx'
import Home from './components/Home.jsx'
import Menu from './components/Menu/Menu.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <h1>404 Not Found</h1>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/menu',
          element: <Menu />
        },
        {
          path: '/login',
          element: <LogIn />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/home/expense',
          element: <Expense_Data />
        },
        {
          path: '/home/income',
          element: <Income_Data />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
