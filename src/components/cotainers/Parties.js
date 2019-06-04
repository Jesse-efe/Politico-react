import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SideMenu from './SideMenu';
import { getAllParties } from '../../actions/parties';
import Footer from '../presentational/Footer';
import PartyCards from '../presentational/PartyCard';
import PartiesNav from '../presentational/PartiesNav';

const Parties = ({fetcheParties, parties}) => {

  useEffect(() => {
    console.log('called');
    fetcheParties();
  }, []);

  return (
  <div id="ooo">
    <PartiesNav />
    <SideMenu />
    <PartyCards parties={parties} />
    <Footer />
  </div>
)};

const mapStateToProps = state => ({
  parties: state.party.parties,
});

const mapDispatchToProps = dispatch => ({
  fetcheParties: () => dispatch(getAllParties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Parties);
