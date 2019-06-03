/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

const SideMenu = () => (
  <section id="side-bar">
        <a href="https://jesse-efe.github.io/Politico/UI/user-profile.html">
            <div className="menu-item">
                My profile
            </div>
        </a>
        <a href="https://jesse-efe.github.io/Politico/UI/parties.html">
            <div className="menu-item active">
                Political parties
            </div>
        </a>
        <a href="https://jesse-efe.github.io/Politico/UI/offices.html">
            <div className="menu-item">
                Political offices
            </div>
        </a>
        <a href="https://jesse-efe.github.io/Politico/UI/results.html">
            <div className="menu-item">
                Election results
            </div>
        </a>
    </section>
);

export default SideMenu;
