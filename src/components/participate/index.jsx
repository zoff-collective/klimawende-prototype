import React from 'react';

import './style.scss';

export default ({ title, intro, children }) => (
  <aside className="participate">
    <h2 className="participate__title">{title}</h2>

    <p className="participate__intro">{intro}</p>

    {children}
  </aside>
);
