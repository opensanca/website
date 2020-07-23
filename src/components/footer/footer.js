import React from "react"

const Footer = () => (
  <footer>
    <div className="container text-center" id="openFooter">
      <p>
        Feito com <i class="fa fa-heart"></i> opensanca{" "}
        {new Date().getUTCFullYear()}{" "}
      </p>
    </div>
  </footer>
)

export default Footer
