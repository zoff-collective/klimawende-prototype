import React from 'react';

import Headline from '../text/headline';
import Paragraph from '../text/paragraph';

import EnvelopeIcon from '../../../static/icons/envelope.svg';
import PhoneIcon from '../../../static/icons/phone.svg';

import './style.scss';

export default ({ name, email, intro, phone, image, url }) => (
  <div className="person">
    <div className="person__image-container">
      {image && <img src={image} alt="" className="person__image" />}
    </div>

    <div className="person__content">
      <Headline level="3" levelStyle="3" underlined>
        {name}
      </Headline>

      <Paragraph text={intro} />

      {email && (
        <p className="person__meta">
          <EnvelopeIcon className="person__meta-icon" />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}

      {phone && (
        <p className="person__meta">
          <PhoneIcon className="person__meta-icon" />
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      )}

      {url && (
        <p className="person__meta">
          <a href={url}>{url}</a>
        </p>
      )}
    </div>
  </div>
);
