import React from "react"

const Info = ({ hp, attack, defense, special_attack, special_defense, speed })=> {
    return(
        <div className="info">
            <div className="hp">
                <p className="hp-text">HP:</p>
                <p className="hp-result">{hp}</p>
            </div>
            <div className="attack">
                <p className="attack-text">ATTACK:</p>
                <p className="attack-result">{attack}</p>
            </div>
            <div className="defense">
                <p className="defense-text">DEFENSE:</p>
                <p className="defense-result">{defense}</p>
            </div>
            <div className="special-attack">
                <p className="special-attack-text">SPECIAL-ATTACK:</p>
                <p className="special-attack-result">{special_attack}</p>
            </div>
            <div className="special-defense">
                <p className="special-defense-text">SPECIAL-DEFENSE:</p>
                <p className="special-defense-rasult">{special_defense}</p>
            </div>
            <div className="speed">
                <p className="speed-text">SPEED:</p>
                <p className="speed-result">{speed}</p>
            </div>
        </div>
    )
}

export default Info