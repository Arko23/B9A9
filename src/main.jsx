import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Home from './component/Home.jsx';
import Contact from './component/Contact.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import CardDetail from './component/CardDetail.jsx';
import Private from './component/Private.jsx';
import Update from './component/Update.jsx';
import Buyer from './component/Buyer.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Error from './component/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('../info.json')
      },
      {
        path:'/now/:id',
        element :<Private><CardDetail></CardDetail></Private>,
        loader : () => fetch('../info.json')
       
      },
      {
        path :'/con',
        element: <Contact></Contact>
      },
      {
        path :'/log',
        element: <Login></Login>
        

      },
      {
        path: '/reg',
        element:<Register></Register>
      },
      {
        path :'/up',
        element:<Private><Update></Update></Private>
      },
      {
        path :'/buy',
        element:<Private><Buyer></Buyer></Private>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  
  </React.StrictMode>,
)
