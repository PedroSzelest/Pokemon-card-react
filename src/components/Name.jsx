import React from "react"

const Name = ({ name, type })=> {
    return(
        <div className="name">
            <p className="name-text">{name}</p>
            <p className="type">{type}</p>
        </div>
    )
}

export default Name