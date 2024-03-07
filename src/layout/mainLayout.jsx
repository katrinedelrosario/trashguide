import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import {ToastContainer} from 'react-toastify'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" autoClose={4000} />
    </>
  )
}