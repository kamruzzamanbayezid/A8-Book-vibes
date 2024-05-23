import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routs/Router.jsx'
import { Toaster } from 'react-hot-toast'
import { SortingProvider } from './Components/SortingProvider/SortingProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SortingProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </SortingProvider>
  </React.StrictMode>,
)
