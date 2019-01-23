import React from 'react';

import './style.scss';

export default ({ title, summary, image, location, type, category }) => (
  <header className="intro-project">
    <div className="intro-project__constraint">
      <div className="intro-project__content-container">
        <h1 className="intro-project__title">
          <small className="intro-project__type">{type}</small>
          {title}
        </h1>

        <dl className="intro-project__meta">
          <dt />
          <dd className="intro-project__meta-description">{location}</dd>

          <dt />
          <dd className="intro-project__meta-description">{category}</dd>
        </dl>

        <p className="intro-project__summary">{summary}</p>
      </div>

      <figure className="intro-project__image-container">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img className="intro-project__image" {...image} />
      </figure>
    </div>
  </header>
);
