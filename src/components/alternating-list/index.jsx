import Link from 'gatsby-link';
import React from 'react';

import Paragraph from '../text/paragraph';

import './style.scss';

export default ({ items }) => (
  <ul className="alternating-list">
    {items.map(({ titleComponent, text, link, image }) => (
      <li key={`alist-${link}`}>
        <Link to={link} className="alternating-list__container">
          <div className="alternating-list__image-container">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img {...image} />
          </div>

          <div className="alternating-list__content-container">
            {titleComponent}
            <Paragraph text={text} />
          </div>
        </Link>
      </li>
    ))}
  </ul>
);
