import Link from 'gatsby-link';
import React from 'react';

import Headline from '../../../components/text/headline';
import Paragraph from '../../../components/text/paragraph';

import CircleIcon from '../../../../static/icons/circle.svg';
import MapIcon from '../../../../static/icons/map-marker-alt.svg';

import './style.scss';

export default ({
  title,
  summary,
  slug,
  type,
  state,
  location,
  category,
  image
}) => (
  <div className="project-list">
    {image && (
      <div className="project-list__image-container">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...image} className="project-list__image" />
      </div>
    )}

    <div className="project-list__content-container">
      <Headline level="3" levelStyle="2" className="project-list__title">
        <small className="project-list__type">
          {type}

          {state === 'Abgeschlossen' && `, ${state}`}
        </small>
        <Link to={`/mitmachen/${slug}/`}>{title}</Link>
      </Headline>

      <dl className="project-list__meta">
        <dt className="project-list__meta-term">Ort</dt>
        <dd className="project-list__meta-description">
          <MapIcon />
          {location}
        </dd>

        <dt className="project-list__meta-term">Kategorie</dt>
        <dd className="project-list__meta-description">
          <CircleIcon />
          {category}
        </dd>
      </dl>

      <Paragraph text={summary} />
    </div>
  </div>
);
