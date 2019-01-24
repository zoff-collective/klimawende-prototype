import React from 'react';

import Headline from '../text/headline';
import Paragraph from '../text/paragraph';

import './style.scss';

export default ({ name, email, intro, phone, image }) => (
  <div className="person">
    <img src={image} alt="" className="person__image" />
    <div className="person__content">
      <Headline level="3" levelStyle="3" underlined>
        {name}
      </Headline>
      <Paragraph>{intro}</Paragraph>
      <p className="person__email">{email}</p>
      <p className="person__phone">{phone}</p>
    </div>
  </div>
);
