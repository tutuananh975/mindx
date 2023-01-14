import { useState } from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
function Layouts() {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Layouts
