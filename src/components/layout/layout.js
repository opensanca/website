import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"

import "./main.css"

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
