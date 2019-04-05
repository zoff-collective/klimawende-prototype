import React from 'react';

import './style.scss';

export default ({ items, ordered = false }) => {
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className="checklist">
      {items &&
        items.map(content => (
          <li
            className="checklist__item"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
    </ListTag>
  );
};
