import React from 'react';

import Headline from '../text/headline';
import Paragraph from '../text/paragraph';

import EnvelopeIcon from '../../../static/icons/envelope.svg';
import PhoneIcon from '../../../static/icons/phone.svg';

import './style.scss';

export default ({ name, email, intro, phone, image }) => (
  <div className="person">
    <img src={image} alt="" className="person__image" />
    <div className="person__content">
      <Headline level="3" levelStyle="3" underlined>
        {name}
      </Headline>

      <Paragraph text={intro} />

      {email && (
        <p className="person__meta">
          <EnvelopeIcon className="person__meta-icon" />
          {email}
        </p>
      )}

      {phone && (
        <p className="person__meta">
          <PhoneIcon className="person__meta-icon" />
          {phone}
        </p>
      )}
    </div>
  </div>
);
