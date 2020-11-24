import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  let { socials } = useStaticQuery(graphql`
    query SocialsQuery {
      socials: allSocialsJson {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <section id="contact" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2>Faça contato!</h2>
            <p>
              <a href="mailto:opensanca@gmail.com">opensanca@gmail.com</a>
            </p>
            <ul className="list-inline banner-social-buttons">
              {socials.edges.map(({ node: social }, i) => (
                <li className="list-inline-item" key={i}>
                  <a
                    href={social.url}
                    className="btn btn-default btn-lg btn-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`fab fa-${social.name} fa-fw`}></i>
                    <span className="network-name">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
