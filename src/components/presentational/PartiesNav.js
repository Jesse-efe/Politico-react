import React from 'react';
import LinkButtons from './LinkButtons';

const PartiesNav = () => (
  <nav>
    <ul>
      <li className="logo">
        <a href="/">Politico</a>
      </li>
      <li className="nav-item">
        <LinkButtons value="Sign out" location="/" />
      </li>
    </ul>
  </nav>
);

export default PartiesNav;
