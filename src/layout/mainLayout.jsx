import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Hero } from "../components/hero/hero";
import { Footer } from "../components/footer/footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </>
  )
}