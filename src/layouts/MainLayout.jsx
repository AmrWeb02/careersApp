import React from 'react'
import Navbar from '../componenets/Navbar'
import { NavLink, Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default MainLayout