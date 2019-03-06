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
  className = '',
  ...rest
}) => {
  const Tag = `${href ? 'a' : 'button'}`;

  return (
    <Tag
      className={classnames(
        'button',
        { 'button--has-full-width': fullWidth },
        { [`button--theme-${theme}`]: theme },
        className
      )}
      href={href}
      type={type}
      {...rest}
    >
      <span className="button__children">{children}</span>
    </Tag>
  );
};
