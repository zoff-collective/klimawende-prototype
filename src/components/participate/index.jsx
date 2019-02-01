import React from 'react';

import Headline from '../text/headline';
import Share from '../share';

import EnvelopeIcon from '../../../static/icons/envelope.svg';
import FacebookIcon from '../../../static/icons/facebook-square.svg';
import TwitterIcon from '../../../static/icons/twitter.svg';
import WhatsappIcon from '../../../static/icons/whatsapp.svg';

import './style.scss';

export default ({ title, intro, children, ...rest }) => (
  <aside className="participate" {...rest}>
    <div className="participate__box">
      <h2 className="participate__title">{title}</h2>

      {intro && <p className="participate__intro">{intro}</p>}

      {children}
    </div>

    <Headline level="3" levelStyle="4">
      Mach die Kampagne bekannter!
    </Headline>

    <Share
      label="Email"
      href="mailto:gustav@zoff-kollektiv.net"
      Icon={EnvelopeIcon}
    />

    <Share label="Whatsapp" href="https://whatsapp.com" Icon={WhatsappIcon} />

    <Share label="Facebook" href="https://facebook.com" Icon={FacebookIcon} />

    <Share label="Tweet" href="https://twitter.com" Icon={TwitterIcon} />
  </aside>
);
