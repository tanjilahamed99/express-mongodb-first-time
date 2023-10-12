import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import User from './component/User';
import Update from './component/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: '/user',
    element: <User></User>,
    loader: () => fetch('http://localhost:5000/user')
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
