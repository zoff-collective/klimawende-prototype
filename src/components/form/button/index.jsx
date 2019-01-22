/* eslint-disable react/button-has-type */
import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default ({
  href,
  type = 'submit',
  theme = false,
  children,
  fullWidth = false,
  ...rest
}) => {
  const Tag = `${href ? 'a' : 'button'}`;

  return (
    <Tag
      className={classnames(
        'button',
        { 'button--has-full-width': fullWidth },
        { [`button--theme-${theme}`]: theme }
      )}
      href={href}
      type={type}
      {...rest}
    >
      {children}
    </Tag>
  );
};
