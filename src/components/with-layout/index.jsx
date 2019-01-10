import Helmet from 'react-helmet';
import React from 'react';

import Footer from '../footer';
import Navigation from '../navigation';

import navigationItems from '../../../data/navigation';

import './font-adelle.css';
import './font-mark.css';
import './style.css';

export default (title, WrappedComponent) => props => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <Navigation items={navigationItems} />

    <main>
      <WrappedComponent {...props} />
    </main>

    <Footer />
  </>
);
