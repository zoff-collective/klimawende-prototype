import React from 'react';

import './style.scss';

export default ({ children, author, description, image }) => (
  <blockquote className="quote">
    <div className="quote__quote-container">
      <p className="quote__quote">{children}</p>
    </div>

    <cite className="quote__author">
      <div className="quote__author-image-container">
        <img src={image} alt={author} className="quote__author-image" />
      </div>

      <div className="quote__author-content-container">
        <span className="quote__author-name">{author}</span>
        <p className="quote__author-description">{description}</p>
      </div>
    </cite>
  </blockquote>
);
