import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Member from './member';

const SectionMembers = () => {
  let { activeMembers } = useStaticQuery(graphql`
    query ActiveMembersQuery {
      activeMembers: allMembersJson(filter: { active: { eq: true } }) {
        edges {
          member: node {
            name
            company
            url
            img {
              childImageSharp {
                fixed(width: 194, height: 194) {
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
    <section id="staff" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Gente que faz acontecer!</h1>
            <p>
              Sem essas pessoas, isso aqui não sairia do papel, em meio a um
              "Toró de Parpite" surge o{" "}
              <strong>
                OPENSANCA! <i className="fa fa-heart"></i>
              </strong>
            </p>
          </div>
        </div>
        <div className="members">
          <div className="row">
            {activeMembers.edges.sort(({member: a}, {member: b}) => a.name.localeCompare(b.name)).map(({ member }) => (
              <Member
                img={
                  <Image
                    fixed={member.img.childImageSharp.fixed}
                    className="staff-image img-circle"
                    alt={member.name}
                  />
                }
                member={member}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionMembers
