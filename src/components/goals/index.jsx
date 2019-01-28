import React from 'react';

import './style.scss';

export default ({ title, items }) => (
  <div className="goals">
    <h2 className="goals__title">{title}</h2>

    <ol className="goals__goals">
      {items.map(goal => (
        <li className="goals__goal">{goal}</li>
      ))}
    </ol>
  </div>
);
