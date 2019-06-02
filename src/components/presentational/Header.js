import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Header = ({ isHomepage }) => (
  <div id="jumbotrun">
    <Navbar />
    {isHomepage ? (
      <div id="jumbo-body">
        <h1>Fast, Secure and Covenient Online Polling System</h1>
        <h4>
            Lorem Cum ea laboriosam ad accusamus ipsa eligendi nostrum, nisi,
            provident maiores cupiditate tenetur. Inventore eius consequatur,
            deleniti quisquam est recusandae corporis unde reiciendis?
            Sint est sit nesciunt, nostrum aut harum quibusdam quasi.
        </h4>
      </div>
    ) : ''}
  </div>
);

Header.propTypes = {
  isHomepage: PropTypes.bool.isRequired,
};

export default Header;
