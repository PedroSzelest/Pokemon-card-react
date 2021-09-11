import React from "react"

const Restart = ({ Again })=> {
    return(
        <>
            <button className="restart" onClick={Again}>RESTART</button>
        </>
    )
}

export default Restart