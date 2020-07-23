import React from "react"

const Member = ({ img = null, member }) => {
  return (
    <div className="col-sm-4">
      {img}
      <h5>
        {member.name}
        {member.company ? ` @${member.company}` : ""}
      </h5>
      <span className="input-group-btn">
        <a
          href={member.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-default btn-green"
        >
          Who?
        </a>
      </span>
    </div>
  )
}

export default Member;
