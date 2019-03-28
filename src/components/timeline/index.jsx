import React from 'react';

import Headline from '../text/headline';
import Paragraph from '../text/paragraph';

import './style.scss';

export default ({ items }) => (
  <ul className="timeline">
    {items.map(({ title, content }) => (
      <li className="timeline__item">
        <Headline level="3" levelStyle="4">
          {title}
        </Headline>

        <Paragraph text={content} />
      </li>
    ))}
  </ul>
);
