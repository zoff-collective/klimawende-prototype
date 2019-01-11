import React from 'react';

import Headline from '../../../components/text/headline';
import Paragraph from '../../../components/text/paragraph';

import './style.scss';

export default ({ title, items = [] }) => (
  <>
    <Headline level="2" levelStyle="2">
      {title}
    </Headline>

    <ul className="partner">
      {items.map(
        ({ node: { address, title: itemTitle, intro, link, image } }) => (
          <li className="partner__item">
            <figure className="partner__figure">
              <img
                src={image}
                alt={`Logo ${itemTitle}`}
                className="partner__figure-image"
              />
            </figure>
            <div className="partner__content">
              <Headline level="3" levelStyle="4">
                <a href={link}>{itemTitle}</a>
              </Headline>

              <Paragraph>{intro}</Paragraph>

              <address className="partner__address">{address}</address>
              <a href={link} className="partner__link">
                {link}
              </a>
            </div>
          </li>
        )
      )}
    </ul>
  </>
);
