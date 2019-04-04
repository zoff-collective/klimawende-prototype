import React from 'react';

import './style.scss';

export default ({ items }) => (
  <aside className="table-of-contents">
    <ul className="table-of-contents__list">
      {items &&
        items.map(({ title, target }) => (
          <li className="table-of-contents__list-item">
            <a href={target} className="table-of-contents__link">
              <span className="table-of-contents__link-content">{title}</span>
            </a>
          </li>
        ))}
    </ul>
  </aside>
);
