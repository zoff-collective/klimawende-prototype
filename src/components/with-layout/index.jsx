import Helmet from 'react-helmet';
import React from 'react';

import Debug from '../debug';
import Footer from '../footer';
import Navigation from '../navigation';

import navigationItems from '../../../data/navigation';

import './font-adelle.scss';
import './font-mark.scss';
import './style.scss';

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

    <Debug />
  </>
);
