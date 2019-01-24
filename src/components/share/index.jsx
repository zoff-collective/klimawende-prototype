import React from 'react';

import './style.scss';

export default ({ href, label, Icon, ...rest }) => (
  <a href={href} className="share" {...rest}>
    <Icon />
    {label}
  </a>
);
