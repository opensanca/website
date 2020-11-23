import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"

import "./main.css"

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

const Layout = ({ children, offset }) => {
  let Offset = () => null
  if (offset) {
    Offset = () => <div style={{ paddingTop: 80 }} />
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Offset />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
