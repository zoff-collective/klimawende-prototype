import Link from 'gatsby-link';
import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default () => (
  <footer className="footer">
    <Constraint width="semi-wide">
      <div className="footer__logo-container">
        <strong className="footer__logo-title">
          Klimawende von unten ist ein Projekt von
        </strong>

        <div className="footer__logo-image-container">
          {[
            '/images/partners/350-white.png',
            '/images/partners/bund-white.png',
            '/images/partners/changing-cities-white.png'
          ].map(src => (
            <img src={src} alt="" />
          ))}
        </div>
      </div>

      <div className="footer__logo-container">
        <strong className="footer__logo-title">Mit Unterstützung von</strong>

        <div className="footer__logo-image-container">
          {[
            '/images/partners/350-white.png',
            '/images/partners/bund-white.png',

            '/images/partners/changing-cities-white.png',
            '/images/partners/greenpeace-white.png',
            '/images/partners/klima-allianz-white.png',

            '/images/partners/naturfreunde-white.png'
          ].map(src => (
            <img src={src} alt="" />
          ))}
        </div>
      </div>
    </Constraint>

    <div className="footer__lower">
      <Constraint width="semi-wide">
        <p>
          <strong>Spendenkonto</strong>&nbsp;&nbsp; Umweltinstitut München
          e.V.&nbsp;&nbsp;&nbsp; Bank für Sozialwirtschaft&nbsp;&nbsp;&nbsp;
          IBAN : DE32 7002 0500 0008 8311 06
        </p>

        <div className="footer__lower-links">
          <Link to="/impressum/">
            <strong>Impressum</strong>
          </Link>
          <Link to="/datenschutz/">
            <strong>Datenschutz</strong>
          </Link>
        </div>
      </Constraint>
    </div>
  </footer>
);
