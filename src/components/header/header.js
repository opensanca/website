import React from "react"

const Header = () => {
  return (
    <header className="intro">
      <div className="intro-body">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h1 className="brand-heading">Opensanca</h1>
              <p className="intro-text">
                Seja bem vindo! Somos um grupo que organiza Meetups sobre
                opensource, inovação, tecnologia e happy hour!
                <br />
                Faça parte!
              </p>
              <a href="/#about" className="btn btn-circle page-scroll">
                <i className="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
