import classnames from 'classnames';
import React from 'react';

import Constraint from '../constraint';
import Headline from '../text/headline';

import './style.scss';

export default ({ children, title, intro, image, backgroundImage }) => (
  <header className={classnames('intro', { 'intro--with-image': !!image })}>
    <Constraint width={image ? 'wide' : 'normal'} className="intro__constraint">
      <div className="intro__content-container">
        <Headline level="1">{title}</Headline>

        {intro && <p className="intro__text">{intro}</p>}

        {children}
      </div>

      {image && (
        <div className="intro__image-container">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img className="intro__image" {...image} />
        </div>
      )}

      {backgroundImage && (
        <>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img className="intro__background-image" {...backgroundImage} />
        </>
      )}
    </Constraint>
  </header>
);
