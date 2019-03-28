import React from 'react';

import Paragraph from '../paragraph';

import './style.scss';

export default ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <li className="list__item">
        <Paragraph text={item} />
      </li>
    ))}
  </ul>
);
