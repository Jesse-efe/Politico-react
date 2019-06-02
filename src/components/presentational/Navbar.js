import React from 'react';
import LinkButtons from './LinkButtons';

const Navbar = () => (
  <nav>
    <ul>
      <li className="logo">
        <a href="/">Politico</a>
      </li>
      <li className="nav-item first-nav-item">
        <LinkButtons value="Login" location="login" />
      </li>
      <li className="nav-item">
        <LinkButtons value="Sign up" location="sign-up" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
