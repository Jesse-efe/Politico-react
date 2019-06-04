/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

const PartyCard = ({parties}) => {
    const createPartyTemplate = (partyArray) => {
        let template = partyArray.map((party) =>
          ( <div id="one-party" key={party.id}>
                <div id="one-party-pic">
                        <img src={party.logoUrl} />
                </div>
                <div id="one-party-text">
                    <h3>{party.name}</h3>
                    <button className="good-button" data-id={party.id} data-name={party.name}>Join Party</button>
                </div>
            </div> 
          )
        );
        return template;
    };

    return (
        <section id="user-details">
            <i className="fas fa-bars fa-2x"></i>
            <i className="fas fa-times fa-2x"></i>
        <h1>Political Parties</h1>
        <div id="history">
            {
                parties ? createPartyTemplate(parties) : ''
            }
        </div>
    </section>
    )
};

export default PartyCard;
