/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../presentational/Header';
import SideMenu from './SideMenu';
import Footer from '../presentational/Footer';
import PartyCards from '../presentational/PartyCard';
import PartiesNav from '../presentational/PartiesNav';

const Parties = () => (
  <div>
    <PartiesNav />
    {/* <SideMenu /> */}
    <PartyCards />
    <Footer />
  </div>
);

Parties.propTypes = {
  submit: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Parties;
