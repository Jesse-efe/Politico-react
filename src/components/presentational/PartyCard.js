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
            {/* <div id="one-party">
                <div id="one-party-pic">
                        <img src="https://i2.wp.com/www.pmnewsnigeria.com/wp-content/uploads/2018/04/Green-Party-of-Nigeria-GPN.jpg?resize=500%2C362&ssl=1" />
                </div>
                <div id="one-party-text">
                    <h3>Green Party of Nigeria</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div>

            <div id="one-party">
                <div id="one-party-pic">
                        <img src="https://netstorage-legit.akamaized.net/images/vllkyt14najasbd258.jpg" />
                </div>
                <div id="one-party-text">
                    <h3>Young Democratic party</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div>

            <div id="one-party">
                <div id="one-party-pic">
                        <img src="http://www.zikoko.com/wp-content/uploads/2018/07/APGA-Logo.jpg" />
                </div>
                <div id="one-party-text">
                    <h3>All Progressives Grand Alliance</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div>

            <div id="one-party">
                <div id="one-party-pic">
                        <img src="https://netstorage-legit.akamaized.net/images/vllkyt7lb83keb7ci.jpg" />
                </div>
                <div id="one-party-text">
                    <h3>Accord</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div>

            <div id="one-party">
                <div id="one-party-pic">
                        <img src="https://ocdn.eu/images/pulscms/Zjk7MDA_/8722c36d3bb2ca07a2c15fa8a928fed3.jpeg" />
                </div>
                <div id="one-party-text">
                    <h3>Peoples Democratic Party</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div>

            <div id="one-party">
                <div id="one-party-pic">
                        <img src="https://netstorage-legit.akamaized.net/images/vllkytdmin4r7uc.jpg" />
                </div>
                <div id="one-party-text">
                    <h3>All Progressives Congress</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div>

            <div id="one-party">
                <div id="one-party-pic">
                        <img src="https://netstorage-legit.akamaized.net/images/vllkyt3vi1qlqodk1g.jpg" />
                </div>
                <div id="one-party-text">
                    <h3>Allied Congress Party of Nigeria</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div>

            <div id="one-party">
                <div id="one-party-pic">
                        <img src="https://nigeriadecide.org/images/KP.jpg" />
                </div>
                <div id="one-party-text">
                    <h3>KOWA</h3>
                    <button class="good-button">Join Party</button>
                </div>
            </div> */}
        </div>
    </section>
    )
};

export default PartyCard;
