/* eslint-disable react/button-has-type */

import React from 'react';

import './style.scss';

export default ({ href, type = 'submit', children, ...rest }) => {
  const Tag = `${href ? 'a' : 'button'}`;

  return (
    <Tag className="button" href={href} type={type} {...rest}>
      {children}
    </Tag>
  );
};
