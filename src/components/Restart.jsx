import React from "react"

const Restart = ({ cla, Again })=> {
    return(
        <>
            <button className={cla} onClick={Again}>RESTART</button>
        </>
    )
}

export default Restart