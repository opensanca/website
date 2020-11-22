import React from "react"

const Member = ({ img = null, member }) => {
  return (
    <a 
      style={{color: "white"}}
      className="col-sm-4"
          href={member.url}
          target="_blank"
          rel="noreferrer"
     >
      {img}
      <h5>
        {member.name}
        {member.company ? ` @${member.company}` : ""}
      </h5>
    </a>
  )
}

export default Member;
