/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from './SideMenu';
import Footer from '../presentational/Footer';
import PartyCards from '../presentational/PartyCard';
import PartiesNav from '../presentational/PartiesNav';

const Parties = () => (
  <div id="ooo">
    <PartiesNav />
    <SideMenu />
    <PartyCards />
    <Footer />
  </div>
);

export default Parties;
