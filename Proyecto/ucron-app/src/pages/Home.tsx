import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/Navbar';


export const Home = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}
