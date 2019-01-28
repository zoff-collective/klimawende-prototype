import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default ({ href, label, Icon, theme, ...rest }) => (
  <a
    href={href}
    className={classnames('share', {
      [`share--has-theme-white`]: theme === 'white'
    })}
    {...rest}
  >
    <Icon />
    {label}
  </a>
);
