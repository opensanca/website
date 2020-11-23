import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Partners = () => {
  let { partners } = useStaticQuery(graphql`
    query PartnersQuery {
      partners: allPartnersJson {
        edges {
          partner: node {
            name
            url
            description
            img {
              childImageSharp {
                fixed(width: 180) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="parceiro" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Parceiros</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2" />
          <div className="row col-md-8">
            {partners.edges.map(({ partner }, i) => (
              <div key={i} className="col-md-6 col-centered partner-logo">
                <a
                  href={partner.url}
                  title={`Ir para ${partner.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    fixed={partner.img.childImageSharp.fixed}
                    alt={`Logo ${partner.name}`}
                    title={partner.name}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    </section>
  )
}

export default Partners
