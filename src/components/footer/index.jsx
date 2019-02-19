import Link from 'gatsby-link';
import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default () => (
  <footer className="footer">
    <Constraint>
      <strong>Klimawende von unten ist ein Projekt von</strong>

      <strong>Mit Unterstützung von</strong>

      <Link to="/impressum/">Impressum</Link>
      <Link to="/datenschutz/">Datenschutz</Link>
    </Constraint>
  </footer>
);
