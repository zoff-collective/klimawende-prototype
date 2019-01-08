import Link from 'gatsby-link';
import React from 'react';

import './style.scss';

export default ({ items }) => (
  <nav className="navigation">
    <Link to="/" className="navigation__logo">
      Klimawende von unten
    </Link>

    <ul className="navigation__list">
      {items.map(({ link, title }) => (
        <li>
          <Link to={link} className="navigation__item">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
