import React from 'react';

import Headline from '../../../../components/text/headline';
import Paragraph from '../../../../components/text/paragraph';

import './style.scss';

export default ({ name, email, intro, phone, image }) => (
  <li className="person-list__person">
    <img src={image} alt="" className="person-list__person-image" />
    <div className="person-list__person-content">
      <Headline level="3" levelStyle="3" underlined>
        {name}
      </Headline>
      <Paragraph>{intro}</Paragraph>
      <p className="person-list__person-email">{email}</p>
      <p className="person-list__person-phone">{phone}</p>
    </div>
  </li>
);
