import React from "react"
import LogoImage from "../../images/logo.png"
import { Link } from "gatsby";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom fixed-top bg-dark"
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
        <Link className="navbar-brand page-scroll" to="/#">
          <img
            src={LogoImage}
            alt=""
            className="img-responsive pull-left"
            width="15%"
            style={{ filter: "invert(1)" }}
          />
          <span className="light">opensanca</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-right ml-auto">
            <li>
              <Link className="page-scroll" to="/#about">
                Sobre
              </Link>
            </li>
            <li>
              <a
                href="https://www.meetup.com/opensanca/"
                target="_blank"
                rel="noreferrer"
              >
                Conteúdo 
              </a>
            </li>
            <li>
              <Link className="page-scroll" to="/#apoie">
                Contribua 
              </Link>
            </li>
            <li>
              <Link className="page-scroll" to="/#parceiro">
                Parceiros
              </Link>
            </li>
            <li>
              <Link className="page-scroll" to="/#contact">
                Contato
              </Link>
            </li>
            <li>
              <Link className="page-scroll" to="/blog">
                Blog 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
