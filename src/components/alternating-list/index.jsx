import Link from 'gatsby-link';
import React from 'react';

import Headline from '../text/headline';
import Paragraph from '../text/paragraph';

import './style.scss';

export default ({ items }) => (
  <ul className="alternating-list">
    {items.map(({ title, text, link, image }) => (
      <li key={`alist-${title}`}>
        <Link to={link} className="alternating-list__container">
          <div className="alternating-list__image-container">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img {...image} />
          </div>

          <div className="alternating-list__content-container">
            <Headline level="2" levelStyle="2" underlined>
              {title}
            </Headline>
            <Paragraph text={text} />
          </div>
        </Link>
      </li>
    ))}
  </ul>
);
