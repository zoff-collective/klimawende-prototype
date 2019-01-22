import React from 'react';

import './style.scss';

export default ({ title, items }) => (
  <div className="goals">
    <h2 className="goals__title">{title}</h2>

    <ol className="goals__goals">
      {items.map((goal, index) => (
        <li className="goals__goal">
          <span className="goals__goal-number">{index + 1}</span>
          <em className="goals__goal-title">{goal}</em>
        </li>
      ))}
    </ol>
  </div>
);
