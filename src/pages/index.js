import React from "react"

import Layout from "../components/layout/layout"

import Header from "../components/header/header"
import About from "../components/about/about"
import Contribute from "../components/contribute/contribute"
import Content from "../components/content/content"
import Partners from "../components/partners/partners"
import Members from "../components/members/members"
import Contact from "../components/contact/contact"

const Index = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Contribute />
      <Content />
      <Partners />
      <Members />
      <Contact />
    </Layout>
  )
}

export default Index
