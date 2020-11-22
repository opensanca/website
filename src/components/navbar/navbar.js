import React, { useEffect, useState } from "react"
import LogoImage from "../../images/logo.png"

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const scroll = (e) => {
    setHasScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll)

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom fixed-top ${hasScrolled ? "bg-dark" : ""}`}
      role="navigation"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" style={{ background: "#fff" }}></i>
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          <img
            src={LogoImage}
            alt=""
            className="img-responsive pull-left"
            width="15%"
            style={{ filter: "invert(1)" }}
          />
          <span className="light">opensanca</span>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-right ml-auto">
            <li>
              <a className="page-scroll" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/opensanca/"
                target="_blank"
                rel="noreferrer"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                href="https://github.com/opensanca"
                target="_blank"
                rel="noreferrer"
              >
                Projetos
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#apoie">
                Apoie
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#podcast">
                Podcast
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#parceiro">
                Parceiros
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
