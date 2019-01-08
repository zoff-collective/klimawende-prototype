import Link from 'gatsby-link';
import React from 'react';

import './style.scss';

export default ({ items }) => (
  <nav className="navigation">
    <Link to="/" className="navigation__logo">
      Klimawende von unten
    </Link>

    <ul className="navigation__list">
      {items.map(({ link, title, name }) => (
        <li>
          <Link
            to={link}
            className={`navigation__item navigation__item--theme-${name}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
