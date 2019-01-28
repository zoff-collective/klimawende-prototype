import React from 'react';

import './style.scss';

export default ({ author, children }) => (
  <blockquote className="blockquote">
    {children}

    {author}
  </blockquote>
);
