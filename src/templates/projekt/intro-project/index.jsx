import React from 'react';

import CircleIcon from '../../../../static/icons/circle.svg';
import MapIcon from '../../../../static/icons/map-marker-alt.svg';

import './style.scss';

export default ({ title, summary, image, location, type, category, state }) => (
  <header className="intro-project">
    <div className="intro-project__constraint">
      <div className="intro-project__content-container">
        <h1 className="intro-project__title">
          <small className="intro-project__type">
            {type}

            {state === 'Abgeschlossen' && `, ${state}`}
          </small>

          {title}
        </h1>

        <dl className="intro-project__meta">
          <dt className="intro-project__meta-term">Ort</dt>
          <dd className="intro-project__meta-description">
            <MapIcon />
            {location}
          </dd>

          <dt className="intro-project__meta-term">Kategorie</dt>
          <dd className="intro-project__meta-description">
            <CircleIcon />
            {category}
          </dd>
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
