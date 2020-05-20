import React from 'react';

const card = (props) => {
    const {name, photo, species, catchphrase} = props
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src={photo} alt="animals" className="tc"/>
            <div className="tc">
                <h2 className="tc">{name}</h2>
                <h3>{species}</h3>
                <p>{catchphrase}</p>
            </div>
        </div>
    )
}

export default card;