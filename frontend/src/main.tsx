import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Register from './Register.tsx'
import Login from './Login.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <h1>It's empty here!</h1>
        <p><a href='/register'>Register?</a></p>
        <p><a href='/login'>Login?</a></p>
      </>
    )
  },{
    path: "login",
    element: (
      <>
        <Login />
      </>
    )
  },{
    path: "register",
    element: (
      <>
        <Register />
      </>
    )
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
